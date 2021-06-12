---
title: About the 2021 My LA2050 Grants Challenge
body_class: strawberry about-page
main_class: standard-layout
footer_image: true
---

{% if site.language == "es" %}
  {% capture about_la2050 %}{% include_relative about-la2050-es.markdown %}{% endcapture %}
{% else %}
  {% capture about_la2050 %}{% include_relative about-la2050-en.markdown %}{% endcapture %}
{% endif %}
{{ about_la2050 | markdownify }}
