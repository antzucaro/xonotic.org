define(function (require) {
  var $ = require('jquery');
  
  require(['datatables'], function() {

    $(document).ready(function() {

      // fun variables from the location hash to play with
      var hash = location.hash.substr(1);
      var game = "xonotic";

      var list = {};

      function loadItems(game) {

        list['items'] = [];

        $.get("../../static/data/" + game + "/cmdlist.txt", function(data) {
          cmds = data.split("\n").map(function(line){

            var re_cmd = new RegExp(/[\^]7(.+) : (.+)/);
            var cmd_grp = re_cmd.exec(line);
            //console.log(cmd_grp);

            if (cmd_grp) {
              var item = {
                label: cmd_grp[1],
                type: "cmd",
                description: cmd_grp[2].replace('"','\"')
              };
              list['items'].push(item);
            }
          });
          
          //console.log(list);
        });

        $.get("../../static/data/" + game + "/aliaslist.txt", function(data) {
          aliases = data.split("\n").map(function(line){

            var re_alias = new RegExp(/[\^]7(.+) : (.+)/);
            var alias_grp = re_alias.exec(line);
            //console.log(cmd_grp);

            if (alias_grp) {
              var item = {
                label: alias_grp[1],
                type: "alias",
                description: alias_grp[2].replace('"','\"')
              };
              list['items'].push(item);
            }
          });
          
          //console.log(list);
        });

        $.get("../../static/data/" + game + "/cvarlist.txt", function(data) {
          cvars = data.split("\n").map(function(line){
            var re_cvar = new RegExp(/[\^]7(\w+) is "(.*)" [\[]"(.*)"[\]] (.+)/);
            var cvar_grp = re_cvar.exec(line);
            //console.log(cvar_grp);

            if (cvar_grp) {
              var item = {
                label: cvar_grp[1],
                type: "cvar",
                default_value: cvar_grp[3].replace('"','\"'),
                description: cvar_grp[4].replace('"','\"')
              };
              list['items'].push(item);
            }
          });
          //console.log(list);
          populateTable();
        });
      }

      loadItems(game); // default to xonotic

      var table = $('#cvar-cmd-list').DataTable({
        "columns": [
          { data: "label", "defaultContent": "", width: "30%" },
          { data: "type", "defaultContent": "", width: "5%" },
          { data: "description", "defaultContent": "", width: "45%" },
          { data: "default_value", "defaultContent": "", width: "20%" },
        ],
        "order": [[0, 'asc']],
        "pageLength": 200,
        "lengthMenu": [ [200, 500, 1000, 2000, -1], [200, 500, 1000, 2000, "All"] ]
      });

      function populateTable() {
        var all = $.parseJSON(JSON.stringify(list));
        $('#cvar-cmd-list').DataTable().rows.add(all.items).search(hash).draw();
        $("#cvar-cmd-list_filter input").val(hash);
      }

      $('#cvar-cmd-list').DataTable().on('search.dt', function () {
          var search = $('#cvar-cmd-list').DataTable().search();
          $('#cacs_share').attr("href", "#" + search);
          location.hash = search;
      });

    });
  });
});
