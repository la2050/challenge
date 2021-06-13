---
title: Please check your email
canonical_url: /
body_class: tangerine
stylesheets:
  - "/assets/css/vote-process.css"
---

{% if site.phase != site.VOTES_BEING_ACCEPTED and site.voting_test_mode != true %}

# Oops!

<div class="introduction" markdown="1">
{% include translate.html text="This page couldn’t be found." %}

{% include translate.html text="You may want to visit our [home page](/) instead." %}
</div>

{% else %}

<div class="introduction" markdown="1">

<h1>{% include translate.html text="Please check your email" %}</h1>

<p>{% include translate.html text="We sent a message to your email address with a link to confirm your votes." %}</p>

<form action="/vote/email-sent/" method="get">

<input type="hidden" name="learn" />
<input type="hidden" name="create" />
<input type="hidden" name="play" />
<input type="hidden" name="connect" />
<input type="hidden" name="live" />

<input type="hidden" name="zip" />
<input type="hidden" name="email" />
<input type="hidden" name="subscribe_email_list" />

<p class="action"><button type="submit">{% include translate.html text="Resend email" %}</button></p>

</form>

<p><small>{% include translate.html text="We sent the message to:" %} <b id="sent-to-email" style="display: inline-block"></b><br /></small> <small>{% include translate.html text="Didn’t get an email? It might be in your “spam” folder." %}</small></p>

</div>



<script>

  // http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript#answer-901144
  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }


  var form = document.querySelector('form');

  var fieldNames = ['learn', 'create', 'play', 'connect', 'live'];
  var nextValue;
  for (var index = 0; index < fieldNames.length; index++) {
    nextValue = getParameterByName(fieldNames[index]);
    if (nextValue) {
      form.querySelector('input[name="' + fieldNames[index] + '"]').value = nextValue;
    }
  }

  form.querySelector('input[name="zip"]').value = getParameterByName('zip');
  form.querySelector('input[name="email"]').value = getParameterByName('email');
  form.querySelector('input[name="subscribe_email_list"]').value = getParameterByName('subscribe_email_list');
  
  document.getElementById("sent-to-email").textContent = getParameterByName('email');
</script>

<script src="{{ site.auth0_js_url }}"></script>
<script>
  window.AUTH0_DOMAIN    = '{{ site.auth0_domain }}',
  window.AUTH0_CLIENT_ID = '{{ site.auth0_client_id }}'
</script>
<script type="text/javascript">
  var webAuth = new auth0.WebAuth({
    domain: window.AUTH0_DOMAIN,
    clientID: window.AUTH0_CLIENT_ID,
    // responseMode: 'form_post',
    responseType: 'token'
  });
</script>

<script>
  function sendEmail(form){
    console.log('sendEmail');

    var zip = document.querySelector('input[name="zip"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var subscribe_email_list = document.querySelector('input[name="subscribe_email_list"]').value;

    var fieldNames = ['learn', 'create', 'play', 'connect', 'live'];
    var votesData = [];
    var nextField;
    for (var index = 0; index < fieldNames.length; index++) {
      nextField = form.querySelector('input[name="' + fieldNames[index] + '"]');
      if (nextField) {
        votesData.push(fieldNames[index] + '=' + encodeURIComponent(nextField.value));
      } else {
        console.log('skipped: ' + fieldNames[index]);
      }
    }

    if (votesData.length < 1) {
      console.error('No items were voted for');
      return;
    }

    votesData.push('subscribe_email_list=' + encodeURIComponent(subscribe_email_list));
    votesData.push('zip=' + encodeURIComponent(zip));
    votesData.push('email=' + encodeURIComponent(email));

    console.dir(votesData);

    var redirectUri = window.location.origin + '/vote/authenticated/?' + votesData.join('&');
    console.log('redirectUri: ' + redirectUri);

    webAuth.passwordlessStart({
      connection: 'email',
      send: 'link',
      email: email,
      redirectUri: redirectUri
    }, function (err,res) {
      if (err) {
        // Handle error

        console.log('err');
        console.log(err)
        console.dir(err)
      } else {

        console.log('res');
        console.log(res)
        console.dir(res)

        form.action = form.action + '?' + votesData.join('&');

        form.submit();
      }

    });
  }

  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    sendEmail(e.target);

  })
</script>

{% endif %}
