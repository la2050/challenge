---
title: How to vote in the 2021 My LA2050 Grants Challenge
body_class: blueberry
main_class: standard-layout
footer_image: true
---

{% if site.language == "es" %}
  {% capture content %}{% include_relative vote-es.markdown %}{% endcapture %}
{% else %}
  {% capture content %}{% include_relative vote-en.markdown %}{% endcapture %}
{% endif %}
{{ content | markdownify }}
