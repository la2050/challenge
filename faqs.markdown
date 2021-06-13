---
title: FAQs for the 2021 My LA2050 Grants Challenge
body_class: tangerine
footer_image: true
stylesheets:
  - "/assets/css/faqs.css"
---

<h1>
  {% include translate.html text="FAQs" %}
</h1>

{% if site.language == "es" %}
  {% capture content %}{% include_relative faqs-es.markdown %}{% endcapture %}
{% else %}
  {% capture content %}{% include_relative faqs-en.markdown %}{% endcapture %}
{% endif %}
{{ content | markdownify }}

<h2>{% include translate.html text="Send us your questions!" %}</h2>

{% include translate.html text="If you have any questions that aren’t answered on this page, please send us an email at [connect@la2050.org](mailto:connect@la2050.org)." %}
