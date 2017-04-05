This is demo app that I prepared for internal workshop at cngroup.dk
More information and workshop video here https://www.graph.cool/forum/t/next-js-react-graphql-presentation-and-demo/90

to run it:

1. `git clone https://github.com/alexedev/scz.git myfolder`
2. `cd myfolder && npm i`
3. `npm run dev` or deploy with `now` and skip the net step 
4. open http://localhost: 3000 

or you can check one of latest versions deployed with `now`: https://scz-tscvowtzlw.now.sh (can be slightly behing current version)
access source code from browser via https://scz-tscvowtzlw.now.sh/_src

thanks to @nilan from  @graphcool for kind support

TODOS:
- fix "Show more" button in faculties (it is displayed even if there are no more items)
- fix bug when in university edit mode inputs are not prefilled with current values (happens on first pageload)
- add horizontal spacing in universities list
- add specialisations list and submit form on Faculty page
- add possibility to display universities/faculties logos
- add search
- add filtering
- more to come

