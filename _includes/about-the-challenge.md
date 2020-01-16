<h1 style="padding-top: 0; padding-bottom: 0; display: grid;">
  {% include city.html %}
  <span style="grid-column: 1/-1; grid-row: 1/-1; align-self: center; font-size: 5vmax; z-index: 2;">What will you do to make LA the best place<span id="headline-goal" style="display: none"> to <a href="/about/#goals" style="text-decoration: none"><strong style="color: inherit;">Live</strong></a></span>?</span>
  <script>
  (function() {
    const goals = [
      "Learn",
      "Create",
      "Play",
      "Connect",
      "Live"
    ];
    const colors = [
      "blueberry",
      "banana",
      "strawberry",
      "tangerine",
      "lime"
    ];
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    const goal = document.getElementById("headline-goal");
    if (goal) {
      const goalText = goal.querySelector("a");
      if (goalText) {
        let randomNumber = getRandomInt(goals.length);
        goalText.textContent = goals[randomNumber];
        goalText.style.color = `var(--${colors[randomNumber]})`;
        goal.style.display = null;
      }
    }
  })()
  </script>
  <style>
    main > h1:first-child::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.25);
      background-image: none;
    }
  </style>
</h1>

<h2>
  Welcome to the
  <span class="avoid-break">2020 My LA2050</span>
  <span class="avoid-break">Grants Challenge</span>
</h2>

LA2050 is a community-guided initiative driving and tracking progress toward a shared vision for the future of Los Angeles. With the support of 30,000 Angelenos, we’ve outlined an aspirational vision centered on five goals and 60+ metrics tracked over time to evaluate how Los Angeles is faring. <br /><br /><strong>The My LA2050 Grants Challenge is an open call for ideas to make LA the best place to learn, create, play, connect, and live.<br /><br />A total of $1,000,000</strong> will be awarded among 25 organizations to implement their proposals. Each organization will also receive a [partnership from LA2050](/about/#la2050-partnership) to support its efforts.

In each of the five [goal categories](/about/#goals), the awards will be…

<div class="numbers" markdown="1">
$100K
: 1st place

$50K
: 2nd place

$25K
: 3rd place

$15K
: 4th place

$10K
: 5th place
</div>

<br />

<strong>Now, we're asking for your help to turn the [LA2050 goals and metrics](/about/#goals) into action.</strong>

{% if site.phase == site.NEW_CHALLENGE_ANNOUNCED %}

Starting **{{ site.ENTRIES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }}** <small>(9am Pacific Time)</small>, you can submit your proposal on this website.

Read our <a href="/submit/#guidelines">guidelines for proposals</a>.

{% elsif site.phase == site.ENTRIES_BEING_ACCEPTED %}

<a href="{{ site.submission_url }}">Submit your idea</a> by **{{ site.ENTRY_PERIOD_ENDED_DATE | date: "%A, %B %-d, %Y" }}** <small>(midnight, Pacific)</small>.

Read our <a href="/submit/#guidelines">guidelines for proposals</a>.

{% elsif site.phase == site.ENTRY_PERIOD_ENDED %}

<p>
  <em>The submission period is complete.</em>
</p>
<p>
  Proposals will be showcased here by <strong>{{ site.ENTRIES_SHOWN_ON_THE_WEBSITE_DATE | date: "%A, %B %-d, %Y" }}</strong>. 
  Voting begins on
  <span class="avoid-break">
    <strong>{{ site.VOTES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }}</strong>.
  </span>
</p>

{% elsif site.phase == site.ENTRIES_SHOWN_ON_THE_WEBSITE %}

<p>
  <em>The submission period is complete.</em>
</p>
<p>
  <a href="/entries/">Check out the entries</a>.
  Voting begins on
  <span class="avoid-break">
    <strong>{{ site.VOTES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }}</strong>.
  </span>
</p>

{% elsif site.phase == site.VOTES_BEING_ACCEPTED %}

<p>
  <a href="/vote/">It’s time to vote</a>!
  Winners will be announced on 
  <span class="avoid-break">
    <strong>{{ site.WINNERS_ANNOUNCED_DATE | date: "%A, %B %-d, %Y" }}</strong>.
  </span>
</p>

{% elsif site.phase == site.VOTING_PERIOD_ENDED %}

<p>
  <em>The public voting period is complete.</em>
</p>
<p>
  <a href="/entries/">Check out the entries</a>.
  Winners will be announced on 
  <span class="avoid-break">
    <strong>{{ site.WINNERS_ANNOUNCED_DATE | date: "%A, %B %-d, %Y" }}</strong>.
  </span>
</p>

{% elsif site.phase == site.FINALISTS_ANNOUNCED %}

<p><em>The finalists have been announced!</em></p>
<p>
  <a href="/finalists/">Check out the finalists</a>.
  Winners will be announced on 
  <span class="avoid-break">
    <strong>{{ site.WINNERS_ANNOUNCED_DATE | date: "%A, %B %-d, %Y" }}</strong>.
  </span>
</p>

{% elsif site.phase == site.WINNERS_ANNOUNCED %}

<p><em>The winners have been announced!</em></p>
<p><a href="/winners/">Check out the winners</a></p>

{% endif %}


<br />

## Winners Selection

Winners will be selected via a two-step process:

**50 finalists will be selected by public vote**: The public will vote on all approved submissions to the grants challenge. Public vote will surface the top 10 finalists in each goal category.

**10 winning proposals will be selected by an internal jury**: Goldhirsh Foundation board and staff will select the winners from the 50 finalists. Two proposals in each goal category will be announced as the winners.

Winners will be selected using the following criteria:

* Impact on the [LA2050 goals and metrics](/about/#goals)
* Overall quality of the application
* Feasibility
* Ability to mobilize the LA community
* Collaborative spirit

{% if site.phase < site.VOTES_BEING_ACCEPTED %}

Starting <strong>{{ site.VOTES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }}</strong>, you can [vote for a proposal](/vote/) on this website.

{% elsif site.phase == site.VOTES_BEING_ACCEPTED %}

<p>
  <a href="/vote/">It’s time to vote</a>!
  Winners will be announced on 
  <span class="avoid-break">
    <strong>{{ site.WINNERS_ANNOUNCED_DATE | date: "%A, %B %-d, %Y" }}</strong>.
  </span>
</p>

{% elsif site.phase == site.VOTING_PERIOD_ENDED %}

<p>
  <em>The public voting period is complete.</em>
</p>
<p>
  <a href="/entries/">Check out the entries</a>.
  Winners will be announced on 
  <span class="avoid-break">
    <strong>{{ site.WINNERS_ANNOUNCED_DATE | date: "%A, %B %-d, %Y" }}</strong>.
  </span>
</p>

{% elsif site.phase == site.FINALISTS_ANNOUNCED %}

<p><em>The finalists have been announced!</em></p>
<p>
  <a href="/finalists/">Check out the finalists</a>.
  Winners will be announced on 
  <span class="avoid-break">
    <strong>{{ site.WINNERS_ANNOUNCED_DATE | date: "%A, %B %-d, %Y" }}</strong>.
  </span>
</p>

{% elsif site.phase == site.WINNERS_ANNOUNCED %}

<p><em>The winners have been announced!</em></p>
<p><a href="/winners/">Check out the winners</a></p>

{% endif %}


<section class="standard-section timeline" id="dates"><div markdown="1">

<h2>Timeline</h2>

{% include timeline.html %}


</div></section>
