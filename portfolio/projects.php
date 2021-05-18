<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <link href="http://fonts.googleapis.com/css?family=Ubuntu:regular,bold&amp;subset=Latin" rel="stylesheet" type="text/css" />
  <link href="resources/css/index.css" rel="stylesheet" />
  <link href="resources/css/projects.css" rel="stylesheet" />
  <script src="resources/js/projects.js"></script>
  <title>
    popisite
  </title>
</head>

<body>
  <?php
  include('menu.php');
  ?>
  <div class="down-right-triangle">
  </div>
  <div class="up-left-triangle-ext">
  </div>
  </nav>
  <section id="projects-content">
    <div class="column">
      <div class="project-tile" id="sb">
        <div class="project-object">
          <div class="project-container" onclick="toggle_project_info(this)">
            <img alt="sb" class="project-object-img" src="resources/img/projects/shopping_bot.png" />
            <div class="project-object-img-overlay">
            </div>
            <p class="project-object-name">
              Shopping bot
            </p>
          </div>
        </div>
        <div class="project-info">
          <div class="text">
            <embed class="readme" src="resources/readmes/sb.html" />
          </div>
        </div>
      </div>
      <div class="project-tile">
        <div class="project-object">
          <div class="project-container" onclick="toggle_project_info(this)">
            <img alt="nnb" class="project-object-img" src="resources/img/projects/nnb.png" />
            <div class="project-object-img-overlay">
            </div>
            <p class="project-object-name">
              Neural network designer
            </p>
          </div>
        </div>
        <div class="project-info">
          <div class="text">
            <embed class="readme" src="resources/readmes/nnb.html" />
          </div>
        </div>
      </div>
      <div class="project-tile">
        <div class="project-object">
          <div class="project-container" onclick="toggle_project_info(this)">
            <img alt="compiler" class="project-object-img" src="resources/img/projects/compiler.jpeg" />
            <div class="project-object-img-overlay">
            </div>
            <p class="project-object-name">
              Compiler
            </p>
          </div>
        </div>
        <div class="project-info">
          <div class="text">
            <embed class="readme" src="resources/readmes/compiler.html" />
          </div>
        </div>
      </div>
      <div class="project-tile">
        <div class="project-object">
          <div class="project-container" onclick="toggle_project_info(this)">
            <img alt="gwi" class="project-object-img" src="resources/img/projects/gwi.png" />
            <div class="project-object-img-overlay">
            </div>
            <p class="project-object-name">
              Global warming investigator
            </p>
          </div>
        </div>
        <div class="project-info">
          <div class="text">
            <embed class="readme" src="resources/readmes/gwi.html" />
          </div>
        </div>
      </div>
      <div class="project-tile">
        <div class="project-object">
          <div class="project-container" onclick="toggle_project_info(this)">
            <img alt="csa" class="project-object-img" src="resources/img/projects/csa.png" />
            <div class="project-object-img-overlay">
            </div>
          </div>
          <p class="project-object-name">
            Covid spread analyzer
          </p>
        </div>
        <div class="project-info">
          <div class="text">
            <embed class="readme" src="resources/readmes/csa.html" />
          </div>
        </div>
      </div>
      <div class="project-tile">
        <div class="project-object">
          <div class="project-container" onclick="toggle_project_info(this)">
            <img alt="announces" class="project-object-img" src="resources/img/projects/announce_flask.png" />
            <div class="project-object-img-overlay">
            </div>
            <p class="project-object-name">
              Announces WebApp
            </p>
          </div>
        </div>
        <div class="project-info">
          <div class="text">
            <embed class="readme" src="resources/readmes/ann.html" />
          </div>
        </div>
      </div>
      <div class="project-tile">
        <div class="project-object">
          <div class="project-container" onclick="toggle_project_info(this)">
            <img alt="gg" class="project-object-img" src="resources/img/projects/gogame_java.png" />
            <div class="project-object-img-overlay">
            </div>
            <p class="project-object-name">
              Go game
            </p>
          </div>
        </div>
        <div class="project-info">
          <div class="text">
            <embed class="readme" src="resources/readmes/gg.html" />
          </div>
        </div>
      </div>
      <div class="project-tile">
        <div class="project-object">
          <div class="project-container" onclick="toggle_project_info(this)">
            <img alt="woe" class="project-object-img" src="resources/img/projects/woe.jpg" />
            <div class="project-object-img-overlay">
            </div>
            <p class="project-object-name">
              Warrios of Enarthia
            </p>
          </div>
        </div>
        <div class="project-info">
          <div class="text">
            <embed class="readme" src="resources/readmes/woe.html" />
          </div>
        </div>
      </div>
      <div class="project-tile">
        <div class="project-object">
          <div class="project-container" onclick="toggle_project_info(this)">
            <img alt="scrabble" class="project-object-img" src="resources/img/projects/scrabble_hack.png" />
            <div class="project-object-img-overlay">
            </div>
            <p class="project-object-name">
              Scrabble destroyer
            </p>
          </div>
        </div>
        <div class="project-info">
          <div class="text">
            Simple cheat for scrabbles.
          </div>
        </div>
      </div>
      <div class="project-tile">
        <div class="project-object">
          <div class="project-container" onclick="toggle_project_info(this)">
            <img alt="gpa" class="project-object-img" src="resources/img/projects/gpa.png" />
            <div class="project-object-img-overlay">
            </div>
            <p class="project-object-name">
              GPA calculator
            </p>
          </div>
        </div>
        <div class="project-info">
          <div class="text">
            <embed class="readme" src="resources/readmes/gpa.html" />
          </div>
        </div>
      </div>
      <div class="project-tile">
        <div class="project-object">
          <div class="project-container" onclick="toggle_project_info(this)">
            <img alt="Portfolio" class="project-object-img" src="resources/img/projects/portfolio.png" />
            <div class="project-object-img-overlay">
            </div>
            <p class="project-object-name">
              Portfolio
            </p>
          </div>
        </div>
        <div class="project-info">
          <div class="text">
            <embed class="readme" src="resources/readmes/portfolio.html" />
          </div>
        </div>
      </div>
      <div class="project-tile">
        <div class="project-object">
          <div class="project-container" onclick="toggle_project_info(this)">
            <img alt="to_do_mobile_app" class="project-object-img" src="resources/img/projects/to_do_mobile_app.png" />
            <div class="project-object-img-overlay">
            </div>
            <p class="project-object-name">
              To Do Mobile App
            </p>
          </div>
        </div>
        <div class="project-info">
          <div class="text">
            <embed class="readme" src="resources/readmes/to_do_mobile_app.html" />
          </div>
        </div>
      </div>
    </div>
  </section>
</body>

</html>