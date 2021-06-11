---
title: FAQs for the 2021 My LA2050 Grants Challenge
body_class: tangerine
footer_image: true
stylesheets:
  - "/assets/css/faqs.css"
---

{% if site.language == "es" %}
  {% capture content %}{% include_relative faqs-es.markdown %}{% endcapture %}
{% else %}
  {% capture content %}{% include_relative faqs-en.markdown %}{% endcapture %}
{% endif %}
{{ content | markdownify }}
