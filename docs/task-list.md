### Task List

#### Misc
- Office Locations
- Services / Content


#### Website
1. Team Photos
2. Team Bios and Credentials
3. Legal Service Descriptions
4. Add Partners to About Page
5. Add Recognition Page
6. Add Different Languages
	- Portuguese, Spanish, Russian, Chinese, Hindi


#### Services
1. Google Analytics
2. Mail Chimp
3. Calendly


#### Library
1. Routing Library
2. API Library
3. App / Local State Library
4. Name + Open Source
5. Beautify URLs


#### Challenges
1. Can't scrape a directory.
This means you can't pass a folder `team/` and pull all files from this directory. This is not allowed from the browser to the hosting platform. You need to do this on the server.

2. You have to add a target url.
Since you can't scrape a directory, you need maintain a list of urls that can be pulled into the browser and then read.

3. All imported functions are invoked on load
The default browser behavior is to invoke an imported Javascript function on load.

4. Dynamically invoking imported functions
If you `import` a function then you need to bind it to the `window` object in order to have your app or a user invoke it.

5. Binding listeners
You need to bind listeners to your html components if you want them to dynamically update on state change app or local.

Eliminates CORS on Chrome
open /Applications/Google\ Chrome.app/ --args --allow-file-access-from-files

#### Notes
1. You don't need `export derault Function()`. The imported file is run once at import, so you actually only need to ensure that the function is called `Function()`. Once that happens then everything will run. If you want to be able to call the function again, then you need to bind to the window property.
2. Using #'s in the markdown breaks chrome. It won't load the file.


