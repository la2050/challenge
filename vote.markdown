---
title: How to vote in the 2021 My LA2050 Grants Challenge
body_class: blueberry
main_class: standard-layout
footer_image: true
---

<h1>
  {% include translate.html text="Public Voting" %}
</h1>

<div class="introduction" style="margin-bottom: 0;">

  {% if site.phase < site.FINALISTS_ANNOUNCED %}

    <p>Starting <strong>{% include translate-date.html date=site.VOTES_BEING_ACCEPTED_DATE format="%A, %B %-d, %Y" %}</strong> <small class="avoid-break">({% include translate.html text=site.VOTES_BEING_ACCEPTED_TIME %})</small>, <span class="avoid-break">you can vote for the finalists on this website.</span></p>

    <p style="font-size: inherit; margin-bottom: 2.25em;">
    <small style="font-size: 0.875em;">{% include translate.html text="You can cast five votes, one per" %} <a href="/about/#goals">{% include translate.html text="goal category" %}</a>.</small>
    </p>

    <p class="action">
      <a href="{{ site.mailing_list_url }}">{% include translate.html text="Get updates" %}</a>
    </p>

  {% elsif site.phase == site.FINALISTS_ANNOUNCED %}

    <p style="max-width: 28em">{% include translate.html text="Starting" %} <strong>{% include translate-date.html date=site.VOTES_BEING_ACCEPTED_DATE format="%A, %B %-d, %Y" %}</strong> <small class="avoid-break">({% include translate.html text=site.VOTES_BEING_ACCEPTED_TIME %})</small>, <span class="avoid-break">{% include translate.html text="you can vote for the finalists on this website" %}.</span></p>

    <p style="font-size: inherit; margin-top: 2.25em;">
      <small style="font-size: 0.875em;">{% include translate.html text="You can cast five votes, one per" %} <a href="/about/#goals">{% include translate.html text="goal category" %}</a>.
      </small>
    </p>

  {% elsif site.phase == site.VOTES_BEING_ACCEPTED %}
    
    <p class="action">
      <a href="/finalists/">{% include translate.html text="Vote now" %}</a>
    </p>
   
    <p style="margin-top: 1.5rem; max-width: 23em">{% include translate.html text="Vote by" %} <strong>{% include translate-date.html date=site.VOTING_PERIOD_ENDED_DATE format="%A, %B %-d, %Y" %}</strong> <small class="avoid-break">({% include translate.html text=site.VOTING_PERIOD_ENDED_TIME %})</small>.</p>

    <p style="font-size: inherit;">
      <small style="font-size: 0.875em;">{% include translate.html text="You can cast five votes, one per" %} <a href="/about/#goals">{% include translate.html text="goal category" %}</a>.
      </small>
    </p>

  {% elsif site.phase == site.VOTING_PERIOD_ENDED %}

    <p>{% include translate.html text="Public voting is complete" %}.</p>

    <small>
      {% include translate.html text="Winners will be announced on" %}
      <span class="avoid-break">
        <strong>{% include translate-date.html date=site.WINNERS_ANNOUNCED_DATE format="%A, %B %-d, %Y" %}</strong>.
      </span>
    </small>

    {% if site.finalists_chosen_by_public_vote %}
      <p class="action">
        <a href="/entries/">Check out the proposals</a>
      </p>
    {% else %}
      <p class="action">
        <a href="/finalists/">{% include translate.html text="Check out the finalists" %}</a>
      </p>
    {% endif %}

  {% elsif site.phase == site.WINNERS_ANNOUNCED %}
    
    <p>{% include translate.html text="The winners have been announced!" %}</p>
    <p class="action">
      <a href="/winners/">{% include translate.html text="Check out the winners" %}</a>
    </p>

  {% endif %}

</div>

{% if site.language == "es" %}

### ¡Tus votos determinan a nuestros ganadores!

Los **25 finalistas** serán seleccionados por Social Venture Partners Los Angeles (nuestro socio de evaluación), y los niveles finales de adjudicación se determinarán mediante votación pública.

Los 25 finalistas recibirán una subvención. La votación determinará el tamaño de las subvenciones que recibirán los finalistas, y los más votados en cada categoría ganarán la subvención del primer lugar. En cada categoría de objetivos:

* Los ganadores del primer lugar recibirán $100,000
* Los ganadores del segundo lugar recibirán $50,000
* Los ganadores del tercer lugar recibirán $25,000
* Los ganadores del cuarto lugar recibirán $15,000
* Los ganadores del quinto lugar recibirán $10,000

Cada de las 25 organizaciones que participaron recibirán una subvención, con cinco subvenciones distribuidas por cada monto en dólares (por ejemplo, habrá cinco ganadores de $100,000, cinco ganadores de $50,000, etc.)

Los ganadores representarán un conjunto diverso de problemas, estrategias y tácticas. Los ganadores serán seleccionados utilizando los siguientes criterios:

* Impacto en los [objetivos y métricas elegidos de LA2050](/about/#goals)
* Viabilidad de la propuesta
* Impacto en las personas atendidas
* Calidad general de la aplicación

{% else %}

### Your votes determine our winners!

**25 finalists** will be selected by Social Venture Partners Los Angeles (our evaluation partner), and the final award levels will be determined through public vote.

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

{% endif %}


<h3>
  {% include translate.html text="Rules" %}
</h3>

<ul>
  <li>{% include translate.html text="Voting begins on" %} {% include translate-date.html date=site.VOTES_BEING_ACCEPTED_DATE format="%A, %B %-d, %Y" %} ({% include translate.html text=site.VOTES_BEING_ACCEPTED_TIME %}) {% include translate.html text="and closes" %} {% include translate-date.html date=site.VOTING_PERIOD_ENDED_DATE format="%A, %B %-d, %Y" %} ({% include translate.html text=site.VOTING_PERIOD_ENDED_TIME %}).</li>
  {% if site.language == "es" %}
    <li>Los miembros del público pueden votar una vez por categoría de objetivo para un total de cinco votos.</li>
    <li>Los votantes deben tener al menos 14 años y vivir en los EE. UU.</li>
    <li>Para participar en el My LA2050 Grants Challenge, los votantes deben iniciar sesión con su teléfono móvil o dirección de correo electrónico.</li>
    <li>Los votantes que se registren por teléfono recibirán un mensaje de texto SMS con un código de confirmación para ingresar.</li>
    <li>A los votantes que se registren por correo electrónico se les enviará un mensaje de correo electrónico con un enlace de confirmación para presionar.</li>
  {% else %}
    <li>Members of the public may vote once per goal category for a total of five votes.</li>
    <li>Voters must be at least 14 years old and a US resident.</li>
    <li>To participate in the My LA2050 Grants Challenge, voters must sign in with their mobile phone or email address.</li>
    <li>Voters signing in by phone will receive an SMS text message with a confirmation code to enter.</li>
    <li>Voters signing in by email will be sent an email message with a confirmation link to press.</li>
  {% endif %}
</ul>

<h3>
  {% include translate.html text="Questions" %}
</h3>

{% include translate.html text="If you have any questions about the information on this page, [please review our FAQs](/faqs) or send us an email at [connect@la2050.org](mailto:connect@la2050.org)." %}
