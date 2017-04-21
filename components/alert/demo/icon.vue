<template>
  <section>
    <v-alert message="Success Tips" type="success" showIcon/>
    <v-alert message="Informational Notes" type="info" showIcon/>
    <v-alert message="Warning" type="warning" showIcon/>
    <v-alert message="Error" type="error" showIcon/>
    <v-alert
        message="success tips"
        description="Detailed description and advices about successful copywriting."
        type="success"
        showIcon
    />
    <v-alert
        message="Informational Notes"
        description="Additional description and informations about copywriting."
        type="info"
        showIcon
    />
    <v-alert
        message="Warning"
        description="This is a warning notice about copywriting."
        type="warning"
        showIcon
    />
    <v-alert
        message="Error"
        description="This is an error message about copywriting."
        type="error"
        showIcon
    />
  </section>
</template>