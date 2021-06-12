<h1 class="home-intro">
  {% include balcony-background.html
    description="Una ilustración de personas de pie en sus balcones y saludando, con carteles que dicen: “¡Gracias trabajadores esenciales!” y “Black Lives Matter”"
  %}
  {% include balcony-text-es.html
    description="Juntos por un futuro mejor"
  %}
  {% include balcony-butterfly-path.html %}
  {% include balcony-butterfly.html
    description="Mariposa"
  %}
  <div class="home-intro__action"></div>
  <script>
  (function() {
    const button = document.querySelector(".promotion .action");
    const container = document.querySelector(".home-intro__action");
    if (button && container) {
      container.appendChild(button.cloneNode(true));
    }
  })();
  </script>
</h1>


<h2>
 ¡Estamos juntos <span style="white-space: nowrap">en esto, LA!</span>
</h2>

Durante el año pasado, la gente de Los Ángeles ha enfrentado muchas dificultades cuando el COVID-19 devastó nuestras comunidades y cambió nuestras vidas.

El sector social ha respondido con cuidado y valor. Aunque ciertamente no nos sorprende, estamos asombrados por la determinación de nuestro sector a través de todo: la transición rápidamente a modelos de servicio seguros y físicamente distantes, la implementación de programación digital innovadora y el giro para responder a necesidades urgentes y emergentes.

Nunca ha sido más claro que nuestro camino a un futuro más brillante se basa en unirnos en el presente. Y, con ese espíritu de responsabilidad compartida y esperanza colectiva en mente, presentamos nuestro octavo My LA2050 Grants Challenge.


<h2>
  Bienvenida al
  <span class="avoid-break">{{ site.year }} My LA2050</span>
  <span class="avoid-break">Grants Challenge</span>
</h2>

LA2050 es una iniciativa guiada por la comunidad que impulsa y rastrea el progreso hacia una visión compartida para el futuro de Los Ángeles centrada en [cinco objetivos y monitoreada a través de más de 65 métricas de progreso regional](/about/#goals). <br /><br /><strong>El My LA2050 Grants Challenge es una solicitud abierta de ideas para hacer de Los Ángeles el mejor lugar para aprender, crear, jugar, conectar y vivir.</strong>

Necesitamos tu ayuda para convertir en acción [los objetivos y métricas de LA2050](/about/#goals).

<strong>Un total de $1,000,000 será premiado entre 25 organizaciones</strong> para implementar sus propuestas. Cada organización recibirá fondos de subvención y asociación de LA2050 para apoyar sus esfuerzos. También estamos agradecidos de ofrecer premios adicionales de nuestros increíbles [socios de financiación al 2021 My LA2050](/partners/).

<p markdown="1" style="margin-top: 1.5em; margin-bottom: 0;">En cada una de [las cinco categorías de objetivos](/about/#goals), los premios serán...</p>
<section class="awards" markdown="1">

### 25 Ganadores

<section class="blueberry" markdown="1">
#### Aprender

$100K
: Primer lugar

</section>

<section class="strawberry" markdown="1">
#### Jugar

$50K
: Segundo lugar

</section>

<section class="banana" markdown="1">
#### Crear

$25K
: Tercer lugar

</section>

<section class="lime" markdown="1">
#### Vivir

$15K
: Cuarto lugar

</section>

<section class="tangerine" markdown="1">
#### Conectar

$10K
: Quinto lugar
</section>

</section>
¡Y premios adicionales disponibles de [los socios financiadores del My LA2050 Grants Challenge de este año](/partners/)!

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
  ¡<a href="/vote/">Es hora de votar</a>!
  
  Los ganadores serán anunciados 
  <span class="avoid-break">
    <strong>el Martes 6 de julio de 2021</strong>.
  </span>
</p>

{% elsif site.phase == site.VOTING_PERIOD_ENDED %}
<p>
  <em>El período de votación pública está completo.</em>
</p>
<p>
  <a href="/finalists/">Mira a los finalistas</a>.
  Los ganadores serán anunciados 
  <span class="avoid-break">
    <strong>el Martes 6 de julio de 2021</strong>.
  </span>
</p>

{% elsif site.phase == site.FINALISTS_ANNOUNCED %}
<p><em>¡Se han anunciado los finalistas!</em></p>
<p>
  <a href="/finalists/">Mira a los finalistas</a>.
 Los ganadores serán anunciados 
  <span class="avoid-break">
    <strong>el Martes 6 de julio de 2021</strong>.
  </span>
</p>

{% elsif site.phase == site.WINNERS_ANNOUNCED %}
<p><em>¡Los ganadores han sido anunciados!</em></p>
<p><a href="/winners/">Mira a los ganadores.</a></p>

{% endif %}

## Seleccion de Ganadores

Los ganadores se seleccionan en un proceso de dos pasos:

**Los 25 finalistas serán seleccionados por un comité de evaluación externo de líderes comunitarios, dirigido por Social Venture Partners Los Angeles.** Como nuestro socio de evaluación, SVP revisará y puntuará las solicitudes para determinar cinco finalistas en cada categoría de objetivos.

Los finalistas serán seleccionados utilizando los siguientes criterios:

* Impacto en los objetivos y métricas elegidos de LA2050
* Viabilidad de la propuesta
* Impacto en las personas atendidas
* Calidad general de la aplicación

Los finalistas representarán una diversidad de asuntos y actividades. Para obtener más información, consulte [el cuadro de mando de la evaluación completo](https://drive.google.com/file/d/1KvHgPWGyfiR9eolVdlEckDGpwUszq7_3/view?usp=sharing).

**Los niveles de adjudicación se determinarán mediante votación pública.** Los votantes determinarán cuáles organizaciones se ubicarán en primer lugar ($100,000), segundo ($50,000), tercero ($25,000), cuarto ($15,000) y quinto ($10,000) en cada categoría de objetivo. Los 25 finalistas que participen en la etapa de votación recibirán una subvención, con cinco subvenciones distribuidas por cada monto en dólares (por ejemplo, habrá cinco ganadores de $100,000).

{% if site.phase < site.VOTES_BEING_ACCEPTED %}

A partir del <strong>lunes 21 de junio de 2021</strong>, puede [votar por una propuesta](/vote/) en este sitio web. 

{% elsif site.phase == site.VOTES_BEING_ACCEPTED %}

<p>
  ¡<a href="/vote/">Es hora de votar</a>!
 Los ganadores serán anunciados 
  <span class="avoid-break">
    <strong>el Martes 6 de julio de 2021</strong>.
  </span>
</p>

{% elsif site.phase == site.VOTING_PERIOD_ENDED %}

<p>
  <em>El período de votación pública está completo.</em>
</p>
<p>
  <a href="/entries/">Mira a los finalistas</a>.
  Los ganadores serán anunciados 
  <span class="avoid-break">
    <strong>el Martes 6 de julio de 2021</strong>.
  </span>
</p>

{% elsif site.phase == site.FINALISTS_ANNOUNCED %}

<p><em>¡Se han anunciado los finalistas!</em></p>
<p>
  <a href="/finalists/">Mira a los finalistas</a>.
  Los ganadores serán anunciados 
  <span class="avoid-break">
    <strong>el Martes 6 de julio de 2021</strong>.
  </span>
</p>

{% elsif site.phase == site.WINNERS_ANNOUNCED %}

<p><em>¡Los ganadores han sido anunciados!</em></p>
<p><a href="/winners/">Mira a las propuestas de los ganadores.</a></p>

{% endif %}

<section class="standard-section timeline" id="dates" style="margin-top: 0 !important;"><div markdown="1">

<style>
  /* SHIM: Balance space above/below timeline */
  main > .timeline {
    margin-top: 2em !important;
    padding-bottom: 2em;
  }
  @media (min-width: 40em) {
    main > .timeline {
      margin-top: 1.5em !important;
      padding-bottom: 4em;
    }
  }
</style>

<h2>Cronología</h2>

{% include timeline.html %}


</div></section>
