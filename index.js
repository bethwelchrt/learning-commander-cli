#!/usr/bin/env node
'use script'

const colors   = require('colors');
const debug   = require('debug')('commander:cli')
const program = require('commander');
const prompt  = require('prompt');
const table = require('markdown-table')

program
  .version('0.1.0', '-v, --version')
  .usage(' ');
  //.usage('encrypt|decrypt <password> <options>');
  
  program
  .command('encrypt<password>')
   .description('Encrypt a plain text password') 
//   .option('-k, --key <string>', 'String|phrase Key to Use')
  .action(function (password, options) {
    console.log('Extra Help Text');
   });

   program
  .command('premierleague <standing>')
   .description('ENGLISH PREMIER LEAGUE TABLE 2019/2021') 

 //   .option('-k, --key <string>', 'String|phrase Key to Use')
 .action(function (standing, options) {
  console.log("")
  console.log(colors.yellow('Premier League Standing'));
  console.log("") 
console.log(
table([
  ['Pos', 'Club','MP', 'W', 'D', 'L', 'Pts'],
  ['1', 'Liverpool','MP', 'W', 'D', 'L', 'Pts'],
  ['2', 'Manchester United','MP', 'W', 'D', 'L', 'Pts'],
  ['3', 'Manchester United','MP', 'W', 'D', 'L', 'Pts'],
  ['4', 'Chelsea','MP', 'W', 'D', 'L', 'Pts'],
  ['5', 'leicester City','MP', 'W', 'D', 'L', 'Pts'],
  ['6', 'Tottenham Hotspur','MP', 'W', 'D', 'L', 'Pts'],
  ['7', 'Wolverhampton Wanderers','MP', 'W', 'D', 'L', 'Pts'],
  ['8', 'Arsernal','MP', 'W', 'D', 'L', 'Pts'],
  ['9', 'Sheffield United','MP', 'W', 'D', 'L', 'Pts'],
  ['10', 'Burnley','MP', 'W', 'D', 'L', 'Pts'],
  ['11', 'Southampton','MP', 'W', 'D', 'L', 'Pts'],
  ['12', 'Everton','MP', 'W', 'D', 'L', 'Pts'],
  ['13', 'Newcastle United','MP', 'W', 'D', 'L', 'Pts'],
  ['14', 'Crystal Palace','MP', 'W', 'D', 'L', 'Pts'],
  ['15', 'Brighton & Hove Albion','MP', 'W', 'D', 'L', 'Pts'],
  ['16', 'West Ham United','MP', 'W', 'D', 'L', 'Pts'],
  ['17', 'Aston Villa','MP', 'W', 'D', 'L', 'Pts'],
  ['18', 'Bournemouth','MP', 'W', 'D', 'L', 'Pts'],
  ['19', 'Watford','MP', 'W', 'D', 'L', 'Pts'],
  ['20', 'Norwhich City','MP', 'W', 'D', 'L', 'Pts']
])

)

 });
   
//   program
//   .command('encrypt <password>')
//   .description('Encrypt a plain text password')
//   .option('-k, --key <string>', 'String|phrase Key to Use')
//   .action(function (password, options) {
//     debug('encrypt command');
//     if( options.key == undefined ){
//       console.log();
//       // console.log('  -k, --key option is required');
      
//       console.log('  ');
//       process.exit(1);
//     } else {
//       let ciphertext = CryptoJS.AES.encrypt(password,options.key);
//       console.log();
//       console.log(' Encrypted Password: ' + ciphertext);
//       console.log();
//     }
 
//   });

program.on('--help', function(){
    console.log();
    console.log('Extra Help Text');
    console.log('');
    console.log('');
    console.log('');
  });


// program.on('--help', function(){
//     console.log();
//     console.log('Examples:');
//     console.log('');
//     console.log('  $ pass encrypt mypassword -k oneWordPass');
//     console.log("  $ pass encrypt 'mypassword' -k 'Phrase to encrypt words' ");
//     console.log('');
//     console.log('  $ pass decrypt encryptedstring -k oneWordPass');
//     console.log("  $ pass decrypt 'encryptedstring' -k 'Phrase to encrypt words' ");
//     console.log('');
//     console.log('Notice: ')
//     console.log('  For special characters in passwords/keys,');
//     console.log('  please use single quotes around each');
//     console.log('');
//     console.log('');
//   });


  program.parse(process.argv);

  if (!program.args.length) program.help();