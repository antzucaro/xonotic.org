define(function (require) {
  var $ = require('jquery');
  
  require(['datatables'], function() {

    $(document).ready(function() {

      // fun variables from the location hash to play with
      var hash = location.hash.substr(1).split('/');
      var game = 'xonotic';
      var ordering = hash[0] || '0a';
      var regex = (hash[1] == 0 || hash[2] == undefined) ? false : true;
      var smart = (regex) ? false : true;
      var filter = hash[2] || '';
      filter = decodeURIComponent(filter);

      var list = {};

      function loadItems(game) {

        list['items'] = [];

        $.get('../../static/data/' + game + '/cmdlist.txt', function(data) {
          cmds = data.split('\n').map(function(line){
            var re_cmd = new RegExp(/[\^]7(.+) : (.+)/);
            var cmd_grp = re_cmd.exec(line);
            //console.log(cmd_grp);

            if (cmd_grp) {
              var item = {
                label: cmd_grp[1],
                type: 'cmd',
                description: cmd_grp[2].replace('"','\"')
              };
              list['items'].push(item);
            }
          });
          //console.log(list);
        });

        $.get('../../static/data/' + game + '/aliaslist.txt', function(data) {
          aliases = data.split('\n').map(function(line){
            var re_alias = new RegExp(/[\^]7(.+) : (.+)/);
            var alias_grp = re_alias.exec(line);
            //console.log(cmd_grp);

            if (alias_grp) {
              var item = {
                label: alias_grp[1],
                type: 'alias',
                description: alias_grp[2].replace('"','\"')
              };
              list['items'].push(item);
            }
          });
          //console.log(list);
        });

        $.get('../../static/data/' + game + '/cvarlist.txt', function(data) {
          cvars = data.split('\n').map(function(line){
            var re_cvar = new RegExp(/[\^]7(\w+) is "(.*)" [\[]"(.*)"[\]] (.+)/);
            var cvar_grp = re_cvar.exec(line);
            //console.log(cvar_grp);

            if (cvar_grp) {
              var item = {
                label: cvar_grp[1],
                type: 'cvar',
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

      var co = ordering.split('-');
      var order = [];
      co.forEach(function(e, i, a) {
        var col = e.substr(0,1);
        var sort = (e.substr(1,1) == 'd') ? 'desc' : 'asc';
        order.push([col, sort]);
      });

      loadItems(game); // default to xonotic

      var table = $('#cvar-cmd-list').DataTable({
        'columns': [
          { data: 'label', 'defaultContent': '', width: '30%' },
          { data: 'type', 'defaultContent': '', width: '5%' },
          { data: 'description', 'defaultContent': '', width: '45%' },
          { data: 'default_value', 'defaultContent': '', width: '20%' },
        ],
        'order': order,
        'pageLength': 200,
        'lengthMenu': [ [200, 500, 1000, 2000, -1], [200, 500, 1000, 2000, 'All'] ]
      });

      function populateTable() {
        var all = $.parseJSON(JSON.stringify(list));
        var r = regexOption();
        $('#cvar-cmd-list').DataTable().clear().rows.add(all.items).search(filter, r[0], r[1]).draw();
        $('#cvar-cmd-list_filter input').val(filter);
      }

      $('#cvar-cmd-list').on('search.dt', function() {
        var search = $('#cvar-cmd-list').DataTable().search();
        filter = search;
        writeUrl();
      });

      $('#cvar-cmd-list').on('order.dt', function() {
          var order = table.order();
          var order_arr = [];
          order.forEach(function(e, i, a) {
            var o = (e[1] == 'desc') ? 'd' : 'a';
            order_arr.push(e[0] + o);
          });
          ordering = order_arr.join("-");
          writeUrl();
      });

      $('#use-regex').change(function() {
        toggleRegex();
      });

      function regexOption() {
        var regex = $('#use-regex').prop('checked');
        var smart = (regex) ? false : true; // if regex, disable smart search
        return [regex, smart];
      }

      function toggleRegex() {
        var r = regexOption();
        $('#cvar-cmd-list').DataTable().search(filter, r[0], r[1]).draw();
        regex = r[0];
        writeUrl();
      }

      function writeUrl() {
        var regexon = (regex) ? 1 : 0;
        var gs = ordering + '/' + regexon + '/' + encodeURIComponent(filter);
        location.hash = gs;
        $('#cacs_share').attr('href', '#' + gs);
      }

      $('#use-regex').prop('checked', regex);

    });
  });
});
