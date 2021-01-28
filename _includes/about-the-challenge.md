<h1 class="home-intro">
  {% include balcony-background.html %}
  {% include balcony-text.html %}
  {% include balcony-butterfly-path.html %}
  {% include balcony-butterfly.html %}
</h1>
<style>
  main > h1:first-child {
    margin-top: 0;
    padding-top: 0;
    padding-bottom: 4.5rem;
  }
  main > h1:first-child svg {
    padding: unset;
    border-radius: unset;
    width: unset;
    height: unset;
    background: unset;
    color: unset;
    margin-top: unset;
  }
  main > .home-intro {
    display: grid;
  }
  main > .home-intro > * {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    justify-self: center;
    align-self: center;
  }
  main > .home-intro svg {
    width: 100%;
    height: auto;
  }
  @media (min-width: 60em) {
    main > .home-intro {
      padding-right: 4.5rem !important;
      padding-left: 7.5rem !important;
    }
  }
</style>


<h2>
 We’re in this <span class="avoid-break">together, LA!</span>
</h2>

Over the past year, the people of Los Angeles have faced innumerable hardships as COVID-19 devastated our communities and upended our lives. 

The social impact sector has responded with care and courage. While we are certainly not surprised, we are in awe of our sector’s determination through it all—quickly transitioning to safe, physically-distant service models, implementing innovative digital programming, and pivoting to respond to urgent and emergent needs.

It has never been more clear that our path toward a brighter future relies on coming together in the present. And, with that spirit of shared responsibility and collective hope in mind, we present our eighth My LA2050 Grants Challenge.


<h2>
  Welcome to the
  <span class="avoid-break">{{ site.year }} My LA2050</span>
  <span class="avoid-break">Grants Challenge</span>
</h2>

LA2050 is a community-guided initiative driving and tracking progress toward a shared vision for the future of Los Angeles centered around [five goals and tracked via 65+ regional progress metrics](/about/#goals). <br /><br /><strong>The My LA2050 Grants Challenge is an open call for ideas to make LA the best place to learn, create, play, connect, and live.</strong>

We need your help to turn the [LA2050 goals and metrics](/about/#goals) into action.

<strong>A total of $1,000,000 will be awarded among 25 organizations</strong> to implement their proposals. Each organization will receive grant funds and [partnership from LA2050](/about/#la2050-partnership) to support its efforts. We are also grateful to offer additional awards from our incredible [2021 My LA2050 funding partners](https://challenge.la2050.org/partners/).

<p markdown="1" style="margin-top: 1.5em; margin-bottom: 0;">In each of the five [goal categories](/about/#goals), the awards will be…</p>

<section class="awards" markdown="1">

### 25 Winners

<section class="blueberry" markdown="1">
#### Learn

$100K
: 1st place

</section>

<section class="strawberry" markdown="1">
#### Play

$50K
: 2nd place

</section>

<section class="banana" markdown="1">
#### Create

$25K
: 3rd place

</section>

<section class="lime" markdown="1">
#### Live

$15K
: 4th place

</section>

<section class="tangerine" markdown="1">
#### Connect

$10K
: 5th place
</section>

</section>

And, check out the [funding awards available from this year's {{ site.year }} grants challenge partners](/partners/)!

{% if site.phase == site.NEW_CHALLENGE_ANNOUNCED %}

Starting **{{ site.ENTRIES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }}** <small>({{ site.ENTRIES_BEING_ACCEPTED_TIME }})</small>, you can <a href="/submit/#guidelines">submit</a> your proposal on this website.

Read our <a href="/submit/#guidelines">application guidelines</a>.

{% elsif site.phase == site.ENTRIES_BEING_ACCEPTED %}

Submissions are open! Apply by <strong>{{ site.ENTRY_PERIOD_ENDED_DATE | date: "%A, %B %-d, %Y" }}</strong> <small>({{ site.ENTRY_PERIOD_ENDED_TIME }})</small>.

<p class="action">
  <a href="{{ site.submission_url }}">Submit your idea</a>
</p>

Read our <a href="/submit/#guidelines">application guidelines</a>.

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
  <a href="/entries/">Check out the proposals</a>.
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
  <a href="/entries/">Check out the proposals</a>.
  Finalists will be announced on 
  <span class="avoid-break">
    <strong>{{ site.WINNERS_ANNOUNCED_DATE | date: "%A, %B %-d, %Y" }}</strong>.
  </span>
</p>

{% elsif site.phase == site.FINALISTS_ANNOUNCED %}

<p><em>The finalists have been selected!</em></p>
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

## Selection of Winners

Winners will be selected via a two-step process:

**25 finalists will be selected by an external evaluation committee of community leaders, led by Social Venture Partners Los Angeles.** As our evaluation partner, SVP will review and score applications to determine five finalists in each goal category.

Finalists will be selected using the following criteria:

* Impact on chosen [LA2050 goals and metrics](/about/#goals)
* Feasibility of proposal
* Impact on people served
* Overall application quality

Finalists will represent a diversity of issues and activities. For more information, view the [full scorecard](https://drive.google.com/drive/folders/1sKLxEqY0AMN1xpwgTKUIv-6d03puPkm4).

**Award levels will be determined via public vote.** Voters will determine which organizations place first ($100,000), second ($50,000), third ($25,000), fourth ($15,000), and fifth ($10,000) in each goal category. All 25 finalists that participate in the voting stage will receive a grant, with five grants distributed at each dollar amount (e.g., there will be five $100,000 winners).

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
  <a href="/entries/">Check out the proposals</a>.
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
<p><a href="/winners/">Check out the winning proposals.</a></p>

{% endif %}

<section class="standard-section timeline" id="dates"><div markdown="1">

<style>
  /* SHIM: Balance space above/below timeline */
  main > .timeline {
    margin-top: 6em !important;
    padding-bottom: 6em;
  }
  @media (min-width: 40em) {
    main > .timeline {
      margin-top: 1.5em !important;
      padding-bottom: 9em;
    }
  }
</style>

<h2>Timeline</h2>

{% include timeline.html %}


</div></section>
