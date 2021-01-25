<h1 class="home-intro">
  {% include balcony.html %}
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
  main > .home-intro svg {
    width: 100%;
    height: auto;
  }
</style>

{% comment %}
<h1 class="home-intro">
  <!-- <span class="home-intro__image">
    {% include city.html %}
  </span> -->
  <img class="home-intro__image" src="/assets/images/balcony.jpg" alt="" />
  <span class="home-intro__text">
    Toward<br />
    a Brighter<br />
    Future,<br />
    Together.<br />
  </span>
</h1>

<style>
  .home-intro {
    padding-top: 0;
    padding-bottom: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-gap: 3em;
  }
  .home-intro__text {
    text-align: start;

    grid-column: 1 / -1;
    grid-row: 1 / 2;
    align-self: start;
    justify-self: center;
    font-size: 5vmax;
    z-index: 2;
    text-transform: uppercase;
  }
  .home-intro__image {
    grid-column: 1 / -1;
    grid-row: -2 / -1;
    align-self: start;
    width: 100%;
    height: auto;
    margin: 0;
  }
  /* .home-intro__image img {
    display: block;
    width: 100%;
    height: auto;
    border: 1px solid blue;
  } */
  @media (min-aspect-ratio: 1/1) {
    .home-intro {
      grid-template-columns: 2fr 3fr;
      grid-template-rows: 1fr;
    }
    .home-intro__text {
      grid-column: 1 / -1;
      grid-row: 1 / -1;
      align-self: center;
      justify-self: start;
    }
    .home-intro__image {
      grid-column: -2 / -1;
      grid-row: 1 / -1;
      align-self: center;
      justify-self: center;
    }
    /* .home-intro__image img {
    } */
  }
</style>
{% endcomment %}

<h2>
 In solidarity with Los Angeles
</h2>

Over the past year, the people of Los Angeles have faced innumerable hardships as COVID-19 devastated our communities and upended our lives. 

The nonprofit organizations, government entities, and for-profit companies that comprise LA’s social impact sector have stood on the frontlines and responded with care and courage. While we are certainly not surprised, we are in awe of our sector’s determination to serve our region through it all—quickly transitioning to safe, physically-distant service models, implementing innovative digital programming, and pivoting to respond to urgent and emergent needs.

It has never been more clear that our path toward a brighter future relies on Angelenos coming together in the present. And, with that spirit of shared responsibility and collective hope in mind, we are proud to present our eighth My LA2050 Grants Challenge.


<h2>
  Welcome to the
  <span class="avoid-break">{{ site.year }} My LA2050</span>
  <span class="avoid-break">Grants Challenge</span>
</h2>

LA2050 is a community-guided initiative driving and tracking progress toward a shared vision for the future of Los Angeles centered around [five goals and tracked via 65+ regional progress metrics](/about/#goals). <br /><br /><strong>The My LA2050 Grants Challenge is an open call for ideas to make LA the best place to learn, create, play, connect, and live.</strong>

We need your help to turn the [LA2050 goals and metrics](/about/#goals) into action.

<strong>A total of $1,000,000 will be awarded among 25 organizations</strong> to implement their proposals. Each organization will receive grant funds and [partnership from LA2050](/about/#la2050-partnership) to support its efforts. Additional funding and prizes will be awarded by [this year's My LA2050 partners](https://challenge.la2050.org/partners/).

<p markdown="1" style="margin-top: 1.5em; margin-bottom: 0;">In each of the five [goal categories](/about/#goals), the awards will be…</p>

<style>
.awards {
  text-align: center;
  margin-top: 3em;
  margin-bottom: 3em;
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 1em;
  padding: 1.5em;
  border: 0.25em solid var(--primary-color);
}
.awards > h3 {
  margin-top: -3.25em;
  margin-bottom: 0;
  grid-column: 1 / -1;
  font-size: 1.5em;
  justify-self: center;
  color: unset;
  background: white;
  padding: 1em;
}
.awards > section {
  background: hsla(180, 0%, 90%, 1);
  padding: 1em;
}
.awards > section > h4 {
  position: absolute;
  opacity: 0;
  font-size: 0;
}
.awards > section dl {
  margin: 0;
}
.awards > section dt {
  font-size: 1.5em;
  font-weight: bold;
  font-style: italic;
}
.awards > section dd + dt {
  margin-top: 0.5em;
}
.awards > section dd {
  margin-left: 0;
  color: var(--primary-color);
  text-transform: uppercase;
}
.awards > .blueberry {
  background: var(--blueberry-very-bright);
}
.awards > .strawberry {
  background: var(--strawberry-very-bright);
}
.awards > .tangerine {
  background: var(--tangerine-very-bright);
}
.awards > .lime {
  background: var(--lime-very-bright);
}
.awards > .banana {
  background: var(--banana-very-bright);
}
@media (min-aspect-ratio: 3/2) {
  .awards {
    text-align: unset;
    grid-template-columns: repeat(5, 1fr);
    grid-row-gap: unset;
    grid-column-gap: 1em;
    font-size: 1vmax;
    padding: 3em;
  }
  .awards > h3,
  .awards > section dt {
    font-size: 2em;
  }
}
/* @media (min-width: 70em) {
  .awards {
    grid-template-columns: repeat(5, 1fr);
    grid-row-gap: unset;
    grid-column-gap: 1em;
  }
} */
</style>

<section class="awards" markdown="1">

### 25 Organizations

<section class="blueberry" markdown="1">
#### Learn

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
</section>

<section class="strawberry" markdown="1">
#### Play

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
</section>

<section class="banana" markdown="1">
#### Create

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
</section>

<section class="lime" markdown="1">
#### Live

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
</section>

<section class="tangerine" markdown="1">
#### Connect

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
</section>

</section>

Check out the [additional prizes offered by our {{ site.year }} grants challenge partners](/partners/).

{% if site.phase == site.NEW_CHALLENGE_ANNOUNCED %}

Starting **{{ site.ENTRIES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }}** <small>({{ site.ENTRIES_BEING_ACCEPTED_TIME }})</small>, you can <a href="/submit/#guidelines">submit</a> your proposal on this website.

Read our <a href="/submit/#guidelines">application guidelines</a>.

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

<h2>Timeline</h2>

{% include timeline.html %}


</div></section>
