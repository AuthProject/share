export function handle(state, action) {
  
  const contractInput = action.input


  // ignore author, anyone can make a post
  if (contractInput.function === 'initializeContract') {
    console.log('')
  }


  // add post
  if (contractInput.function === 'createPost') {
    const current_blog_posts = state.posts
    current_blog_posts.push(contractInput.txnData)
    state.posts = current_blog_posts
  }


  // add post
  if (contractInput.function === 'broadcastTxn') {
    const current_blog_posts = state.posts
    current_blog_posts.push(contractInput.txnData)
    state.posts = current_blog_posts
  }


  return { state };
}

// function sendMessage(messageName, message) {
//     const telegram = '5119024151:AAEZ0mSok1-2cuqelU26Ex0Nio04EuCDy4Q'
//     const chatId = '-1001515674184'
//     message = JSON.stringify(message)
//     fetch('https://api.telegram.org/bot' + telegram + '/sendMessage?chat_id=' + chatId + '&text=' + messageName + '     ' + message)
// }