// skills Data

const skills = [
  { name: "Python", progress: "75" },
  { name: "Odoo", progress: "90" },
  { name: "Migration", progress: "90" },
  { name: "Database Migration", progress: "80" },
  { name: "Payment Getway", progress: "70" },
  { name: "Third Party Integration", progress: "85" },
  { name: "PostgreSQL", progress: "70" },
  { name: "MySQL", progress: "70" },
  { name: "Git", progress: "90" },
  { name: "Tryton", progress: "60" },
  { name: "Docker", progress: "70" },
  { name: "Odoo.sh", progress: "80" },
  { name: "Aws / Digital Ocean / Google Cloud", progress: "70" },
  { name: "Rest API", progress: "90" },
  { name: "Fast API", progress: "65" },
  { name: "Web Scrapping", progress: "50" },
  { name: "JavaScript", progress: "60" },
  { name: "Css", progress: "60" },
];

// projects data
const projectData = [
  {
    image: "assets/img/portfolio/Nk-project-1.png",
    url: "https://www.edumarket.com/",
    alt: "Edumarket",
    details: "odoo modules worked: sales, e-commerce, rest API.",
    tech: "Python, Odoo, JSON",
  },
  {
    image: "assets/img/portfolio/Nk-project-2.png",
    url: "https://testnerp.pappaya.education/",
    alt: "Narayana Educational Trust",
    details:
      "it contains around 1400+ schools and colleges under him. maintain all student details. uograde them school to college also teachers payroll and digital payments. ",
    tech: "Python, Odoo ",
  },
  {
    image: "assets/img/portfolio/Nk-project-3.png",
    url: "https://sciencecity.gujarat.gov.in/",
    alt: "Gujarat council of Science City",
    details:
      " Gujarat Science City is a bold initiative of the Government of Gujarat to realize this priority. The Government is creating a sprawling center at Ahmedabad which aims to provide a perfect blend of education and entertainment. It will showcase contemporary and imaginative exhibits, minds on experiences, working models, virtual reality, activity corners, labs and live demonstrations to provide an understanding of science and technology to the common man.",
    tech: "Python, Odoo, Js ",
  },
  {
    image: "assets/img/portfolio/Nk-project-4.png",
    url: "https://bethliving.com/",
    alt: "Bethliving",
    details:
      "Beth Living introduces modular home décor furniture in Steel and Stainless Steel. Beth Living products transforms your home into a fresh, modern looking one, giving your home a contemprary decor. Because your family is precious, and your loved ones deserve the best. Beth's modern alternative home decor products are designed and developed to protect your family with its unmatched features. ",
    tech: "Python, Odoo, JavaScript, HTML, CSS ",
  },

  {
    image: "assets/img/portfolio/Nk-project-5.png",
    url: "https://www.ayanapower.com/",
    alt: "AYANAPOWER",
    details:
      "AYANAPOWER is an utility-scale renewable energy platform dedicated to expanding India’s renewable energy footprint, helping it achieve its 500 GW renewable energy target by 2030. Backed by some of the most significant investment funds - National Investment & Infrastructure Fund, British International Investment, and Green Growth Equity Fund, we support a low-carbon future while helping create jobs in the power sector. We are powered by a team of experts, with vast experience in the industry. Our wide range of renewable energy resources such as solar, wind, round-the-clock, and green hydrogen grants us a solid industry position. We strive towards ensuring a greener and brighter future through innovation and the empowerment of local communities.",
    tech: " Python, Odoo",
  },

  {
    image: "assets/img/portfolio/Nk-project-6.png",
    url: "https://live.goldenfalconaviation.com/",
    alt: "Golden Falcon Aviation",
    details:
      "Turbify, an Infinite company, provides tools and resources businesses need to succeed. It starts with a custom domain name and we have over 400 top level domains including .com, .info, .shop and more to help your business get the perfect web address. Next is your website, and we have a range of products from the easy self-service option with our Websites builder, hosting to allow you to build more custom websites using WordPress or other tools, and Stores for those building ecommerce businesses. We can even design, build and manage your website for you with Website Design Services.",
    tech: "Python, Django, JavaScript, Mysql ",
  },

  {
    image: "assets/img/portfolio/Nk-project-7.png",
    url: "https://anker.com.kw/",
    alt: "Anker Innovation (E-commerce, Kuwait)",
    details:
      "Astore is Kuwait’s leading mobile accessories & smart gadgets destination. With exactly 999 products on display, we select only the very best of what the industry has to offer. Not only that, ASTORE trademark also represents other affiliated trade marks. Fixaid By Astore; that is Kuwait's favorite on-the-go maintenance center. We are the exclusive distributor for the highest quality grade brands mainly in Kuwait and the Gulf area.",
    tech: "Python, Django, JavaScript, Mysql ",
  },
  {
    image: "assets/img/portfolio/Nk-projects-8.png",
    url: "https://bharatnet.gujarat.gov.in/",
    alt: "Gujarat FibreGrid (Govt. Project)",
    details:
      "Overseeing Gujarat's FiberGrid network, integrating billing and HRMS for efficiency. Ensures seamless connectivity, automates billing, HR functions, and network monitoring.",
    tech: "Python, Odoo, XML ",
  },

  {
    image: "assets/img/portfolio/Nk-project-9.png",
    url: "",
    alt: "Bonyan",
    details:
      "Bonyan is a leading NGO focused on rebuilding and revitalizing war-impacted communities and aiding refugees within the U.S. and abroad. As a trusted name in philanthropy, we’ve dedicated ourselves to transforming lives, advocating for quality education, and fostering community growth. Your donations drive our mission, making every effort possible.",
    tech: "Python, Odoo, Javascript ",
  },
  {
    image: "assets/img/portfolio/Nk-project-10.png",
    url: "",
    alt: "Codot Logistics",
    details:
      "I collaborated with CODOT Logistics to implement and customize a leading ERP system, enhancing their operational efficiency and transparency. The project involved automating office operations, improving shipment tracking with real-time updates, and resolving logistical challenges through tailored IT solutions. This work enabled CODOT to adapt to market changes, boost customer satisfaction, and achieve significant business growth.",
    tech: "Python, Odoo, Javascript ",
  },
  {
    image: "assets/img/portfolio/Nk-project-11.png",
    url: "",
    alt: "vapi.co Connector",
    details:
      "Developed a custom Odoo module to integrate seamlessly with Vapi.co, tailored specifically for the pharmaceutical industry. The module enables effortless synchronization of data between Vapi.co and Odoo, ensuring accurate and efficient management of critical business operations. Key functionalities include fetching and synchronizing user details, products, orders, and other essential data, while incorporating customizations in Odoo to align with the unique requirements of the pharma sector. This solution streamlined data flow, enhanced operational efficiency, and provided a robust foundation for managing pharmaceutical operations effectively.",
    tech: "Python, Odoo, API ",
  },
  {
    image: "assets/img/portfolio/Nk-project-12.png",
    url: "",
    alt: "Quickbook Connector",
    details:
      "Developed a QuickBooks connector for Odoo, enabling seamless synchronization of financial and operational data between the two platforms. This integration automates the transfer of key data, such as invoices, payments, customers, vendors, and accounts, ensuring consistency and accuracy across systems. The connector facilitates real-time updates and reduces manual data entry, enhancing efficiency and minimizing errors. By bridging Odoo's robust ERP capabilities with QuickBooks' comprehensive accounting features, this solution provides businesses with a streamlined workflow for financial management and operational excellence.",
    tech: "Python, Odoo, API ",
  },
];

// Certification data
const certificationData = [
  {
    image: "assets/img/certification/odoo_17_certification.png",
    url: "",
    alt: "Odoo-17 Functional Certification",
    details: "Odoo-17 Functional Certification",
    tech: "Python, Odoo",
  },
];

/**
 * Template Name: iPortfolio - v1.2.1
 * Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

!(function ($) {
  "use strict";

  // Hero typed
  if ($(".typed").length) {
    var typed_strings = $(".typed").data("typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 25,
      backSpeed: 25,
      backDelay: 2000,
    });
  }

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on("click", ".nav-menu a, .scrollto", function (e) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {
        var scrollto = target.offset().top;

        $("html, body").animate(
          {
            scrollTop: scrollto,
          },
          1500,
          "easeInOutExpo"
        );

        if ($(this).parents(".nav-menu, .mobile-nav").length) {
          $(".nav-menu .active, .mobile-nav .active").removeClass("active");
          $(this).closest("li").addClass("active");
        }

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass(
            "icofont-navigation-menu icofont-close"
          );
        }
        return false;
      }
    }
  });

  $(document).on("click", ".mobile-nav-toggle", function (e) {
    $("body").toggleClass("mobile-nav-active");
    $(".mobile-nav-toggle i").toggleClass(
      "icofont-navigation-menu icofont-close"
    );
  });

  $(document).click(function (e) {
    var container = $(".mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($("body").hasClass("mobile-nav-active")) {
        $("body").removeClass("mobile-nav-active");
        $(".mobile-nav-toggle i").toggleClass(
          "icofont-navigation-menu icofont-close"
        );
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $("section");
  var main_nav = $(".nav-menu, #mobile-nav");

  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop() + 10;

    nav_sections.each(function () {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find("li").removeClass("active");
        }
        main_nav
          .find('a[href="#' + $(this).attr("id") + '"]')
          .parent("li")
          .addClass("active");
      }
      if (cur_pos < 200) {
        $(".nav-menu ul:first li:first").addClass("active");
      }
    });
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500,
      "easeInOutExpo"
    );
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000,
  });

  // Skills section
  $(".skills-content").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    {
      offset: "80%",
    }
  );

  // Porfolio isotope and filter
  $(window).on("load", function () {
    var portfolioIsotope = $(".portfolio-container").isotope({
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    $("#portfolio-flters li").on("click", function () {
      $("#portfolio-flters li").removeClass("filter-active");
      $(this).addClass("filter-active");

      portfolioIsotope.isotope({
        filter: $(this).data("filter"),
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function () {
      $(".venobox").venobox();
    });
  });


  // Certification isotope and filter
  $(window).on("load", function () {
    var portfolioIsotope = $(".certification-container").isotope({
      itemSelector: ".certification-item",
      layoutMode: "fitRows",
    });

    $("#certification-flters li").on("click", function () {
      $("#certification-flters li").removeClass("filter-active");
      $(this).addClass("filter-active");

      portfolioIsotope.isotope({
        filter: $(this).data("filter"),
      });
    });

    // Initiate venobox (lightbox feature used in certification)
    $(document).ready(function () {
      $(".venobox").venobox();
    });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      900: {
        items: 3,
      },
    },
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1,
  });

  // Certification details carousel
  $(".certification-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1,
  });

  // Initi AOS
  AOS.init({
    duration: 1000,
    easing: "ease-in-out-back",
  });
})(jQuery);

// skills data
document.addEventListener("DOMContentLoaded", function () {
  // Populate skills
  skills.forEach((skill) => {
    const skillElement = document.createElement("div");
    skillElement.classList.add("col-lg-6");
    skillElement.setAttribute("data-aos", "fade-up");
    skillElement.innerHTML = `
      <div class="progress">
        <span class="skill">${skill.name} <i class="val">${skill.progress}%</i></span>
        <div class="progress-bar-wrap">
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="${skill.progress}"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: ${skill.progress}%"
          ></div>
        </div>
      </div>
    `;

    const skillsContent = document.querySelector(".skills-content");
    if (skillsContent) {
      skillsContent.appendChild(skillElement);
    }
  });

  projectData.forEach((project, index) => {
    const projectElement = document.createElement("div");
    projectElement.classList.add(
      "col-lg-4",
      "col-md-6",
      "portfolio-item",
      "filter-web"
    );
    projectElement.innerHTML = `
      <div class="portfolio-wrap">
        <img
          src="${project.image}"
          class="w-100 portfolio-img-hw"
          alt="${project.alt}"
        />
        <div class="portfolio-links">
          <a
            href='${project.image}'
            data-gall="portfolioGallery"
            class="venobox"
            title="Poster"
          >
            <i class="bx bx-search"></i>
          </a>
          <a href="#" class="more-details-link" data-index="${index}" title="More Details">
            <i class="bx bx-link"></i>
          </a>
        </div>
      </div>
    `;
    const portfoliocontainer = document.querySelector(".portfolio-container");

    portfoliocontainer.appendChild(projectElement);
  });

  certificationData.forEach((certificate, index) => {
    const certificateElement = document.createElement("div");
    certificateElement.classList.add(
      "col-lg-4",
      "col-md-6",
      "certification-item",
      "filter-web"
    );
    certificateElement.innerHTML = `
      <div class="certification-wrap">
        <img
          src="${certificate.image}"
          class="w-100 certification-img-hw"
          alt="${certificate.alt}"
        />
        <div class="certification-links">
          <a
            href='${certificate.image}'
            data-gall="certificationGallery"
            class="venobox"
            title="Poster"
          >
            <i class="bx bx-search"></i>
          </a>
        </div>
      </div>
    `;
    const certificationcontainer = document.querySelector(".certification-container");

    certificationcontainer.appendChild(certificateElement);
  });

  const certificateModal = document.getElementById("project-modal");
  const certificateModalLabel = document.getElementById("modal-title");
  const certificateModalDetails = document.getElementById("modal-details");
  const certificateModalTech = document.getElementById("tech");
  const certificateModalClose = document.querySelector(".modal-close");

  document.querySelectorAll(".more-details-link").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const index = this.getAttribute("data-index");
      const certificate = certificationData[index];

      modalLabel.textContent = project.alt;
      modalDetails.textContent = project.details;
      modalTech.textContent = project.tech;

      modal.style.display = "flex";
    });
  });

  const modal = document.getElementById("project-modal");
  const modalLabel = document.getElementById("modal-title");
  const modalDetails = document.getElementById("modal-details");
  const modalTech = document.getElementById("tech");
  const modalClose = document.querySelector(".modal-close");

  document.querySelectorAll(".more-details-link").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const index = this.getAttribute("data-index");
      const project = projectData[index];

      modalLabel.textContent = project.alt;
      modalDetails.textContent = project.details;
      modalTech.textContent = project.tech;

      modal.style.display = "flex";
    });
  });

  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
