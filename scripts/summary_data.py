#!/usr/bin/env python

import argparse
import datetime
import json
import sys
import urllib.parse
import urllib.request

STATS_BASE_URL = "https://stats.xonotic.org"

GITLAB_BASE_URL = "https://gitlab.com/api/v4"

# Found via https://gitlab.com/api/v4/groups?search=xonotic
GITLAB_GROUP_ID = 51877


def get_xonstat_summary_data():
    """ Get the summary of the past 24 hours worth of data from XonStat. """
    url = "{}/summary?scope=day".format(STATS_BASE_URL)
    try:
        response = urllib.request.urlopen(url)
        data = json.loads(response.read())
        return data
    except:
        return {}


def get_gitlab_projects(group_id=GITLAB_GROUP_ID):
    """ Returns a list of gitlab project IDs from a group number. """
    url = "{}/groups/{}/projects".format(GITLAB_BASE_URL, GITLAB_GROUP_ID)
    try:
        response = urllib.request.urlopen(url)
        data = json.loads(response.read())
        return [e["id"] for e in data]
    except:
        return []


def get_project_commits_committers(project_id, since):
    """ Gets the list of commits and committers for a given project within a given time frame. """
    # the 'since' parameter is an ISO8601 date string
    since_str = urllib.parse.quote(since.isoformat())

    url = ("{}/projects/{}/repository/commits?since={}"
           .format(GITLAB_BASE_URL, project_id, since_str))

    try:
        response = urllib.request.urlopen(url)
        data = json.loads(response.read())

        commits = 0
        committers = set()
        for commit in data:
            commits += 1
            committers.add(commit["author_name"])

        return commits, committers

    except:
        return 0, set()


def main():
    parser = argparse.ArgumentParser(description="Generate summary data for Hugo.")
    parser.add_argument("output_json_file", help="the output file in JSON format")
    args = parser.parse_args()

    # this is the data to be rendered to the JSON file, eventually
    data = {
        "players": 0,
        "games": 0,
        "commits": 0,
        "committers": 0
    }

    stats_summary_data = get_xonstat_summary_data()
    if stats_summary_data:
        data["players"] = stats_summary_data["players"]
        data["games"] = sum([e["num_games"] for e in stats_summary_data["games"]])

    since = datetime.datetime.utcnow() - datetime.timedelta(days=30)
    project_ids = get_gitlab_projects()

    # find the number of commits and the distinct committers in the given timeframe
    commits = 0
    committers = set()
    for project_id in project_ids:
        p_commits, p_committers = get_project_commits_committers(project_id, since)
        commits += p_commits
        for e in p_committers:
            committers.add(e)

    data["commits"] = commits
    data["committers"] = len(committers)

    with open(args.output_json_file, "w") as f:
        f.write(json.dumps(data, sort_keys=True, indent=4))

    return 0


if __name__ == "__main__":
    sys.exit(main())
