---
title: 2021 My LA2050 Grants Challenge
body_class: blueberry home
main_class: standard-layout
footer_image: true
show_promotion: true
use_default_meta_description: true
---

{% if site.language == "es" %}
  {% capture about %}{% include about-the-challenge-es.md %}{% endcapture %}
{% else %}
  {% capture about %}{% include about-the-challenge.md %}{% endcapture %}
{% endif %}
{{ about | markdownify }}

{% if site.language == "es" %}
  {% capture about %}{% include about-es.md %}{% endcapture %}
{% else %}
  {% capture about %}{% include about.md %}{% endcapture %}
{% endif %}
{{ about | markdownify }}
