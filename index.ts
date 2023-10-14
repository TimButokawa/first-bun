const hello = (name: 'sally' | 'bill') => {
  return `Hello ${name}!`;
}

console.log(hello('sally'));
