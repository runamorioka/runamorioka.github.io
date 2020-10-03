$(document).ready(function () {
    $("a[href*=#]").bind("click", function (e) {
      e.preventDefault(); // prevent hard jump, the default behavior

      var target = $(this).attr("href"); // Set the target as variable

      // perform animated scrolling by getting top-position of target-element and set it as scroll target
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $(target).offset().top,
          },
          600,
          function () {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
          }
        );

      return false;
    });
  });

  $(window)
    .scroll(function () {
      var scrollDistance = $(window).scrollTop() + 100;

      // Show/hide menu on scroll
      if (scrollDistance >= 600) {
        $(".sticky").fadeIn("fast");
      } else {
        $(".sticky").fadeOut("fast");
      }

      // Assign active class to nav links while scolling
      $(".toc").each(function (i) {
        if ($(this).position().top <= scrollDistance) {
          $(".sticky a.active").removeClass("active");
          $(".sticky a").eq(i).addClass("active");
        }
      });
    })
	.scroll();
/*
window.addEventListener('DOMContentLoaded', () => {

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio > 0) {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
			} else {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
			}
		});
	});

	// Track all sections that have an `id` applied
	document.querySelectorAll('h1[id]').forEach((h1) => {
		observer.observe(h1);
	});
	document.querySelectorAll('h2[id]').forEach((h2) => {
		observer.observe(h2);
	});
	
});

*/