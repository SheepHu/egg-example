<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <ul class="news-view view">
      {% for item in list %}
        <li class="item">
          <span>{{ item.name}}</span>--<span>{{ item.email}}</span>
        </li>
      {% endfor %}
    </ul>
  </body>
</html>