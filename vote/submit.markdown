---
title: Vote in the 2021 My LA2050 Grants Challenge
canonical_url: /
body_class: strawberry
main_class: standard-layout
footer_image: true
---

{% if site.phase != site.VOTES_BEING_ACCEPTED and site.voting_test_mode != true %}

<h1>{% include translate.html text="Oops!" %}</h1>

<div class="introduction" markdown="1">
{% include translate.html text="This page couldn’t be found." %}

{% include translate.html text="You may want to visit our [home page](/) instead." %}
</div>

{% else %}

<h1>{% include translate.html text="Oops!" %}</h1>

## Something went wrong

*We couldn’t confirm your votes, due to a technical problem.* (To keep the voting fair, we confirm each vote using an email address, phone number or Facebook account.)

**Please try voting again, using a different web browser.** We recommend the latest version of these browsers:

* [Firefox](https://www.mozilla.org/firefox/)
* [Opera](https://www.opera.com)
* [Chrome](https://www.google.com/chrome/)
* [Microsoft Edge](https://www.microsoft.com/windows/microsoft-edge)
* [Safari](https://www.apple.com/safari/)

If you have a question or need help, please send us an email at <a href="mailto:connect@la2050.org">connect@la2050.org</a>.

{% endif %}
