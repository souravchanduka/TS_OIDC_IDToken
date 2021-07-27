import * as core from '@actions/core'
var oidc_client = require('@sourav_chanduka/oidc-client')


async function run(): Promise<void> {
  try {
    let aud = ''
    const audience = core.getInput('audience', {required: false})
    if (audience !== undefined) 
      aud = `${audience}`
    
    const id_token = oidc_client.getIDToken(aud)

    core.setOutput('id_token', id_token)

  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
