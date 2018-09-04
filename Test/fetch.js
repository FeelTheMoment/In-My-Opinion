 fetch('List.txt').then(function(response){
    response.text().then(function(text){
      var items = text.split(',');
      var i = 0;
      var tags = '';
      while(i<items.length){
        var item = items[i];
        item = item.trim();
        var tag = '<li><a href="#!'+item+'" onclick="fetchPage(\''+item+'\')">'+item+'</a></li>';
        tags = tags + tag;
        i = i + 1;
      }
      document.querySelector('#nav').innerHTML = tags;
    })
  });
