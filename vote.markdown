---
title: How to vote in the 2020 My LA2050 Grants Challenge
body_class: blueberry
main_class: standard-layout
footer_image: true
---

<h1>
  Public Voting
</h1>

<div class="introduction" markdown="1">

{% if site.phase < site.FINALISTS_ANNOUNCED %}

Starting **{{ site.VOTES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }}** <small class="avoid-break">({{ site.VOTES_BEING_ACCEPTED_TIME }})</small>, <span class="avoid-break">you can vote for the finalists on this website.</span>

<p style="font-size: inherit; margin-bottom: 2.25em;">
<small style="font-size: 0.875em;" markdown="1">You can cast five votes, one per [goal category](/about/#goals).</small>
</p>

<p class="action" markdown="1">
  <a href="{{ site.mailing_list_url }}">Get updates</a>
</p>

{% elsif site.phase == site.FINALISTS_ANNOUNCED %}

{% if site.voting_postponed == true %}
<p id="postponed" style="font-size: inherit; margin-bottom: 3em; max-width: 45em; margin-left: auto; margin-right: auto;"><em style="color: inherit; font-weight: inherit">Following the lead of the My LA2050 finalists, we have decided to postpone the public voting portion of the My LA2050 Grants Challenge by one month. We are proud of our finalists who are on the frontlines of advocacy and service in LA and want to support them in focusing their resources at this crucial time. Voting will now take place from Monday, July 13, 2020 (9am Pacific Time) through Monday, July 20, 2020 (5pm Pacific Time).</em></p>
{% endif %}

<p style="max-width: 23em" markdown="1">Starting **{{ site.VOTES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }}** <small class="avoid-break">({{ site.VOTES_BEING_ACCEPTED_TIME }})</small>, you can vote for the finalists on this website.</p>

<p class="action" markdown="1">
  <a href="/finalists/">Check out the finalists!</a>
</p>
<p style="font-size: inherit; margin-top: 2.25em;" markdown="1">
  <small style="font-size: 0.875em;">You can cast five votes, one per [goal category](/about/#goals).
  Vote by pressing the “Vote for this proposal” button on any [finalist](/finalists/) page.</small>
</p>

{% elsif site.phase == site.VOTES_BEING_ACCEPTED %}

<p style="max-width: 23em" markdown="1">Vote by <strong>{{ site.VOTING_PERIOD_ENDED_DATE | date: "%A, %B %-d, %Y" }}</strong> <small class="avoid-break">({{ site.VOTING_PERIOD_ENDED_TIME }})</small>.</p>

<p class="action" markdown="1">
  <a href="/finalists/">Check out the finalists!</a>
</p>
<p style="font-size: inherit; margin-top: 2.25em;" markdown="1">
  <small style="font-size: 0.875em;">You can cast five votes, one per [goal category](/about/#goals).
  Vote by pressing the “Vote for this proposal” button on any [finalist](/finalists/) page.</small><br />
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

{% if site.finalists_chosen_by_public_vote %}
<p class="action" markdown="1">
  <a href="/entries/">Check out the proposals</a>
</p>
{% else %}
<p class="action" markdown="1">
  <a href="/finalists/">Check out the finalists</a>
</p>
{% endif %}

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


### Your votes determine our winners!

**25 finalists** will be selected by Social Venture Partners Los Angeles (our evaluation partner), and the <span class="avoid-break">final award levels will be determined through public vote.</span>

All 25 finalists will be awarded a grant. Voting will determine the size of the grants finalists receive, with the top voted in each category winning the first place grant. In each goal category:
* First place winners will receive $100,000
* Second place winners will receive $50,000
* Third place winners will receive $25,000
* Fourth place winners will receive $15,000
* Fifth place winners will receive $10,000

All organizations that participate in the voting stage will receive a grant, with five grants distributed at each dollar amount (e.g., there will be five $100,000 winners, five $50,000 winners, and so on).

The winners will represent a diverse set of issues, strategies, and tactics. Winners will be selected using the following criteria:

* Impact on chosen [LA2050 goals and metrics](/about/#goals)
* Feasibility of proposal
* Impact on people served
* Overall application quality


### Rules

* Voting begins on {{ site.VOTES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }} ({{ site.VOTES_BEING_ACCEPTED_TIME }}) and closes {{ site.VOTING_PERIOD_ENDED_DATE | date: "%A, %B %-d, %Y" }} ({{ site.VOTING_PERIOD_ENDED_TIME }}).
* Members of the public may vote once per goal category for a total of five votes.
* Voters must be at least 14 years old and a US resident.
* To participate in the My LA2050 Grants Challenge, voters must sign in with their mobile phone, email address, or Facebook account.
* Voters signing in by phone will receive an SMS text message with a confirmation code to enter.
* Voters signing in by email will be sent an email message with a confirmation link to press.

### Questions

If you have any questions about the information on this page, [please review our FAQs](/faqs) or send us an email at [connect@la2050.org](mailto:connect@la2050.org).

