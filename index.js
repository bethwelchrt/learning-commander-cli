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
  .command('standing')
   .description('ENGLISH PREMIER LEAGUE TABLE 2019/2021') 

 //   .option('-k, --key <string>', 'String|phrase Key to Use')
 .action(function (standing, options) {
  console.log("")
  console.log(colors.yellow('Premier League Standing'));
  console.log("") 
console.log(
table([
  ['Pos', 'Club','MP', 'W', 'D', 'L', 'Pts'],
  ['1', 'Liverpool','38', '32', '3', '3', '99'],
  ['2', 'Manchester United','38', '26', '3', '9', '81'],
  ['3', 'Manchester United','38', '18', '12', '8', '66'],
  ['4', 'Chelsea','38', '20', '6', '12', '66'],
  ['5', 'leicester City','38', '18', '8', '12', '62'],
  ['6', 'Tottenham Hotspur','38', '16', '11', '11', '59'],
  ['7', 'Wolverhampton Wanderers','38', '15', '14', '9', '59'],
  ['8', 'Arsernal','38', '14', '14', '10', '56'],
  ['9', 'Sheffield United','38', '14', '12', '12', '54'],
  ['10', 'Burnley','38', '15', '9', '14', '54'],
  ['11', 'Southampton','38', '15', '7', '16', '52'],
  ['12', 'Everton','38', '13', '10', '15', '49'],
  ['13', 'Newcastle United','38', '11', '11', '16', '44'],
  ['14', 'Crystal Palace','38', '9', '14', '15', '43'],
  ['15', 'Brighton & Hove Albion','38', '9', '14', '15', '41'],
  ['16', 'West Ham United','38', '10', '9', '19', '39'],
  ['17', 'Aston Villa','38', '9', '8', '21', '35'],
  ['18', 'Bournemouth','38', '9', '7', '22', '34'],
  ['19', 'Watford','38', '8', '10', '20', '34'],
  ['20', 'Norwhich City','38', '5', '6', '27', '21']
])

)

 });
   

 program
 .command('goalscorers')
  .description('Shows the leading goal scorers in the season') 

//   .option('-k, --key <string>', 'String|phrase Key to Use')
 .action(function (standing, options) {
   console.log("")
   console.log(colors.yellow('English Premier League Goal Scorers'));
   console.log("") 
console.log(
 table([
   ['Rank', 'Name','Club', 'stat'],
   ['1', 'Jarmy Vardy','Leicester City','23'],
   ['2', 'Pierre-Emerick Aubameyang','Arsenal','22'],
   ['3','Danny Ings', 'Southampton','21'],
   ['4','Raheem Sterling', 'Manchester City','20'],
   ['5','Mohamed Salah', 'Liverpool','19']
 ])

)

  });
program.on('--help', function(){
  console.log();
  console.log('Extra Help Text');
  console.log('');
  console.log('');
  console.log('');
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
