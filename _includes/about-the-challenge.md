<h1 style="padding-top: 0; padding-bottom: 0; display: grid;">
  {% include city.html %}
  <span style="grid-column: 1/-1; grid-row: 1/-1; align-self: center; font-size: 5vmax; z-index: 2;">What will you do to<br />make LA the best place<span id="headline-goal" style="display: none"> to<br /><a href="/about/#goals" style="text-decoration: none"><strong style="color: inherit;">Live</strong></a></span>?</span>
  <script>
  (function() {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
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
    let cursor = getRandomInt(goals.length);
    function update() {
      const goal = document.getElementById("headline-goal");
      if (goal) {
        const goalText = goal.querySelector("a");
        if (goalText) {
          cursor++;
          if (cursor >= goals.length) cursor = 0;
          goalText.textContent = goals[cursor];
          goalText.style.color = `var(--${colors[cursor]})`;
          goal.style.display = null;
        }
      }
    }
    setInterval(update, 2000);
    update();
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

LA2050 is a community-guided initiative driving and tracking progress toward a shared vision for the future of Los Angeles centered around [five goals and tracked via 65+ regional progress metrics](/about/#goals). <br /><br /><strong>The My LA2050 Grants Challenge is an open call for ideas to make LA the best place to learn, create, play, connect, and live.</strong>

We need your help to turn the LA2050 goals and metrics into action.

<strong>A total of $1,000,000will be awarded among 25 organizations</strong> to implement their proposals. Each organization will receive grant funds and [partnership from LA2050](/about/#la2050-partnership) to support its efforts. Additional funding and prizes will be awarded by this year's [My LA2050 partners].(/partners)

<p markdown="1" style="margin-top: 1.5em; margin-bottom: 0;">In each of the five [goal categories](/about/#goals), the awards will be…</p>

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

{% if site.phase == site.NEW_CHALLENGE_ANNOUNCED %}

Starting **{{ site.ENTRIES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }}** <small>({{ site.ENTRIES_BEING_ACCEPTED_TIME }})</small>, you can <a href="/submit/#guidelines">submit</a> your proposal on this website.

Read our <a href="/submit/#guidelines">guidelines for proposals</a>.

{% elsif site.phase == site.ENTRIES_BEING_ACCEPTED %}

Submissions are open! Apply by <strong>{{ site.ENTRY_PERIOD_ENDED_DATE | date: "%A, %B %-d, %Y" }}</strong> <small>({{ site.ENTRY_PERIOD_ENDED_TIME }})</small>.

<p class="action">
  <a href="{{ site.submission_url }}">Submit your idea</a>
</p>

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

**25 finalists will be selected by an external evaluation committee of community leaders, led by Social Venture Partners Los Angeles.** As our evaluation partner, SVP will review and score applications to determine five finalists in each goal category.

Finalists will be selected using the following criteria:

* Impact on chosen [LA2050 goals and metrics](/about/#goals)
* Feasibility of proposal
* Impact on people served
* Overall application quality

Finalists will represent a diversity of issues and activities. For more information, view the [full scorecard[(https://drive.google.com/drive/folders/11Wk6lF_aHEq4tljPPkvnNAZl07JrUjzX).

**Award levels will be determined via public vote.** Voters will determine which organizations place first ($100,000), second ($50,000), third ($25,000), fourth ($15,000), and fifth ($10,000) in each category. All 25 finalists that participate in the voting stage will receive a grant.



{% if site.phase < site.VOTES_BEING_ACCEPTED %}

Starting <strong>{{ site.VOTES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }}</strong>, you can [vote for a proposal](/vote/) on this website. <a href="{{ site.mailing_list_url }}">Get notified when voting opens!</a>

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
