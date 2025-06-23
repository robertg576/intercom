  window.intercomSettings = {
    api_base: "https://api-iam.intercom.io",
    app_id: "bezov38e",
    name: sub_name,
    email: sub_email,
    user_id: sub_uri,
    sub_user: sub_user,
    sub_domain: sub_domain,
    sub_reseller: sub_reseller,
    sub_scope: sub_scope,
    sub_uri: sub_uri,
    server: server_name,
    Screen_Share: enableScreenShare,
    Chat_UC: enableChatUC,
    Chat_SMS: enableChatSMS,
    Video_Chat: enableVideo
  };

<script>
// We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/bezov38e'
(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/bezov38e';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
</script>