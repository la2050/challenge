---
title: 2021 My LA2050 Grants Challenge
body_class: blueberry home
main_class: standard-layout
footer_image: true
show_promotion: true
use_default_meta_description: true
---

{% if site.language == "es" %}
  {% capture about %}{% include_relative about-the-challenge-es.markdown %}{% endcapture %}
{% else %}
  {% capture about %}{% include_relative about-the-challenge-en.markdown %}{% endcapture %}
{% endif %}
{{ about | markdownify }}
