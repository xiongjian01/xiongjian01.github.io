var posts=["posts/a16f.html","posts/3eeb.html","posts/ee6.html","posts/20210921.html","posts/20210912.html","posts/20211002.html","posts/20211004.html","posts/20210825.html","posts/20210829.html","posts/202110040.html","posts/20211005.html","posts/20221214.html","posts/20220112.html","posts/20220131.html","posts/20220404.html","posts/20220912.html","posts/20221002.html","posts/20220912.html","posts/20221004.html","posts/20211225.html","posts/20211225-1.html","posts/20211106.html","posts/20211106.html","posts/20220131.html","posts/20211123.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};