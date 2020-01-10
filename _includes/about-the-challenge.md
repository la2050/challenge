<h1>
  {% include city-illustration.html %}
  Tell us… how do you turn <strong>inspiration</strong> <span class="avoid-break">into <strong>impact</strong>?</span>
</h1>

<h2>
  Welcome to the
  <span class="avoid-break">2020 My LA2050</span>
  <span class="avoid-break">Grants Challenge</span>
</h2>

LA2050 is a community-guided initiative driving and tracking progress toward a shared vision for the future of Los Angeles. With the support of 30,000 Angelenos, we’ve outlined an aspirational vision centered on five goals and 60+ metrics tracked over time to evaluate how Los Angeles is faring. <br /><br /><strong>The My LA2050 Grants Challenge is an open call for ideas to make LA the best place to learn, create, play, connect, and live.<br /><br />A total of $1,000,000</strong> will be awarded among 10 organizations to implement their proposals. Each organization will receive a total of $100,000 and [partnership from LA2050](/about/#la2050-partnership) to support its efforts.

<strong>Now, we're asking for your help to turn the [LA2050 goals and metrics](/about/#goals) into action.</strong>

{% if site.phase == site.NEW_CHALLENGE_ANNOUNCED %}

Starting Monday, <strong>February 3, 2020</strong> <small>(9am Pacific Time)</small>, you can submit your proposal on this website.

Read our <a href="/submit/#guidelines">guidelines for proposals</a>.

{% elsif site.phase == site.ENTRIES_BEING_ACCEPTED %}

<a href="{{ site.submission_url }}">Submit your idea</a> by Friday, **March 27, 2019** <small>(midnight, Pacific)</small>.

Read our <a href="/submit/#guidelines">guidelines for proposals</a>.

{% elsif site.phase == site.ENTRY_PERIOD_ENDED %}

<p>
  <em>The submission period is complete.</em>
</p>
<p>
  Proposals will be showcased here by <strong>April 6, 2020</strong>. 
  Voting begins on
  <span class="avoid-break">
    <strong>June 1, 2020</strong>.
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
    <strong>June 1, 2020</strong>.
  </span>
</p>

{% elsif site.phase == site.VOTES_BEING_ACCEPTED %}

<p>
  <a href="/vote/">It’s time to vote</a>!
  Winners will be announced on 
  <span class="avoid-break">
    <strong><mark>June 15, 2020</mark></strong>.
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
    <strong><mark>June 15, 2020</mark></strong>.
  </span>
</p>

{% elsif site.phase == site.FINALISTS_ANNOUNCED %}

<p><em>The finalists have been announced!</em></p>
<p>
  <a href="/finalists/">Check out the finalists</a>.
  Winners will be announced on 
  <span class="avoid-break">
    <strong><mark>June 15, 2020</mark></strong>.
  </span>
</p>

{% elsif site.phase == site.WINNERS_ANNOUNCED %}

<p><em>The winners have been announced!</em></p>
<p><a href="/winners/">Check out the winners</a></p>

{% endif %}

<div class="numbers" markdown="1">
$1 million
: in grants

10
: organizations

$100,000
: over one year
</div>


<section class="standard-section steps"><div markdown="1">

<div><img src="/assets/images/steps/watering-can.svg" height="200" alt="" /></div>

![](/assets/images/steps/1.svg?v={{ site.version }}) Step 1
: You have an idea.

![](/assets/images/steps/2.svg?v={{ site.version }}) Step 2
: The LA2050 community rallies around it.

![](/assets/images/steps/3.svg?v={{ site.version }}) Step 3
: Together, we make LA the best place to live, learn, play, connect, and create.

</div></section>


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

Starting Wednesday, <strong>June 1, 2020</strong>, you can [vote for a proposal](/vote/) on this website.

{% elsif site.phase == site.VOTES_BEING_ACCEPTED %}

<p>
  <a href="/vote/">It’s time to vote</a>!
  Winners will be announced on 
  <span class="avoid-break">
    <strong><mark>June 15, 2020</mark></strong>.
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
    <strong><mark>June 15, 2020</mark></strong>.
  </span>
</p>

{% elsif site.phase == site.FINALISTS_ANNOUNCED %}

<p><em>The finalists have been announced!</em></p>
<p>
  <a href="/finalists/">Check out the finalists</a>.
  Winners will be announced on 
  <span class="avoid-break">
    <strong><mark>June 15, 2020</mark></strong>.
  </span>
</p>

{% elsif site.phase == site.WINNERS_ANNOUNCED %}

<p><em>The winners have been announced!</em></p>
<p><a href="/winners/">Check out the winners</a></p>

{% endif %}


<section class="standard-section timeline" id="dates"><div markdown="1">

<h2 class="hidden-but-accessible">Timeline</h2>

{% include timeline.html %}


</div></section>
