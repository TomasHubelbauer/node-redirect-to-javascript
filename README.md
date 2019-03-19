# Node Server Redirect to `javascript: Protocol

In this repository I explore whether it is possible to redirect a browser to a
`javascript:` protocol link from a server 3XX `Location` redirect response.

I am using a Node server for simplicity here. You can run it by executing
`node index.js` at your terminal. The `index.html` page with the demo won't work
without the server running.

This is based on the existence of JS bookmarklets, links like these:

```html
<a href="javascript:alert('Hi!')">Bookmarklet</a>
```

These links are called bookmarklets, because they (used to?) be used to expose
the current page to a bit of an inline JavaScript logic when placed as a
bookmark to the browser's bookmark bar. People were using them for things like
highlighting search words (until browsers started doing that) and (un)decorating
pages for better readability (until browsers got reader modes).

I am wondering if a link which is an HTTP one can be redirected by a server to
lead to this `javascript` link and if the browser will execute it.

I am certain this won't work, because that could be a huge security risk. In
this repository I am finding out.

And it didn't! Which is a good thing. You can change the redirect URL in
`index.js` to something like `https://google.com/ncr` to see that in general
the redirecting works, but when changed back to the JavaScript protocol link,
the browser will reject the redirect as it is not initiated by the user.

I tested this in Chrome 72 and Edge. Firefox is broken for me at the moment.
I assume this doesn't work anywhere.
