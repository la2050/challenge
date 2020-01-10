---
title: How to vote in the 2020 My LA2050 Grants Challenge
body_class: blueberry
main_class: standard-layout
---

<h1>
  Public Voting
</h1>

<div class="introduction" markdown="1">

{% if site.phase < site.ENTRIES_SHOWN_ON_THE_WEBSITE %}

Starting **{{ site.VOTES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }}** (9am Pacific Time), you can vote for the entries on this website.<br />You can cast five votes, one per [goal category](/about/#goals).

<p class="action" markdown="1">
  <a href="{{ site.mailing_list_url }}">Get updates</a>
</p>

{% elsif site.phase == site.ENTRIES_SHOWN_ON_THE_WEBSITE %}

Starting **{{ site.VOTES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }}** (9am Pacific Time), you can vote for the entries on this website.<br />You can cast five votes, one per [goal category](/about/#goals).

<p class="action" markdown="1">
  <a href="/entries/">Check out the entries!</a>
</p>
<p style="font-size: inherit; margin-top: 2.25em;">
  <small style="font-size: 0.875em;">You can vote by pressing the “Vote for this proposal” button on any entry page.</small>
</p>

{% elsif site.phase == site.VOTES_BEING_ACCEPTED %}

Vote by <strong>{{ site.VOTING_PERIOD_ENDED_DATE | date: "%A, %B %-d, %Y" }}</strong> (5pm Pacific Time).
<br />
You can cast five votes, one per [goal category](/about/#goals).

<p class="action">
  <a href="/entries/">Check out the entries!</a>
</p>
<p style="font-size: inherit; margin-top: 2.25em;">
  <small style="font-size: 0.875em;">You can vote by pressing the “Vote for this proposal” button on any entry page.</small><br />
  <small style="font-size: 0.875em;">You can also visit the <a href="/vote/form/">voting form</a> directly.</small>
</p>

{% elsif site.phase == site.VOTING_PERIOD_ENDED %}

Public voting is complete.

<small>
  Winners will be announced on 
  <span class="avoid-break">
    <strong>{{ site.WINNERS_ANNOUNCED_DATE | date: "%A, %B %-d, %Y" }}</strong>.
  </span>
</small>

<p class="action" markdown="1">
  <a href="/entries/">Check out the entries</a>
</p>

{% elsif site.phase == site.FINALISTS_ANNOUNCED %}

The finalists have been announced!

<small>
  Winners will be announced on 
  <span class="avoid-break">
    <strong>{{ site.WINNERS_ANNOUNCED_DATE | date: "%A, %B %-d, %Y" }}</strong>.
  </span>
</small>

<p class="action">
  <a href="/finalists/">Check out the finalists</a>
</p>

{% elsif site.phase == site.WINNERS_ANNOUNCED %}

The winners have been announced!

<p class="action">
  <a href="/winners/">Check out the winners</a>
</p>

{% endif %}

</div>


### Help us choose our winners!

**25 finalists** will be chosen by the evaluation committee, and the <span class="avoid-break">**5 winners** will be voted on by the public.</span>

The winners will represent a diverse set of issues, strategies, and tactics. Winners will be selected using the following criteria:

* Impact on the [LA2050 goals and metrics](/about/#goals)
* Overall quality of the application
* Feasibility
* Innovation
* Collaborative spirit

### Rules

* Voting begins on {{ site.VOTES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }} (9am Pacific Time) and closes {{ site.VOTING_PERIOD_ENDED_DATE | date: "%A, %B %-d, %Y" }} (5pm Pacific Time).
* Members of the public may vote once per goal category for a total of five votes.
* Voters must be at least 14 years old and a US resident.
* To participate in the My LA2050 Grants Challenge, voters must sign in with their mobile phone, email address, or Facebook account.
* Voters signing in by phone will receive an SMS text message with a confirmation code to enter.
* Voters signing in by email will be sent an email message with a link to press.

### Questions

If you have any questions about the information on this page, [please review our FAQs](/faqs) or send us an email at [connect@la2050.org](mailto:connect@la2050.org).

