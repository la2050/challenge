---
title: Partners of the 2021 My LA2050 Grants Challenge
body_class: tangerine
main_class: standard-layout
footer_image: true
stylesheets:
  - "/assets/css/partners.css"
---

{% if site.language == "es" %}
  {% capture content %}{% include_relative partners-es.markdown %}{% endcapture %}
{% else %}
  {% capture content %}{% include_relative partners-en.markdown %}{% endcapture %}
{% endif %}
{{ content | markdownify }}
