<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>    
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="ISO-8859-1">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
    <!-- Jquery CDN  -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css">
</head>
<body onload="init()">
    <div class="container">
        <div class="row justify-content-center"> 
        
        <jsp:include page="/WEB-INF/views/header.jsp"/> 
            <div class="card" style="width: 18rem;">
                <!-- <img src="..." class="card-img-top" alt="..."> -->
                
                          <div class="card-img-top tenor-gif-embed" data-postid="23348829"
                          data-share-method="host" data-aspect-ratio="1.2749"
                          data-width="100%">
                          <a href="https://tenor.com/view/mickey-mouse-dance-meme-fnf-guy-no-way-gif-23348829">Mickey Mouse Dance GIF
                          </a>from <a href="https://tenor.com/search/mickey+mouse-gifs">Mickey Mouse GIFs</a>
                          </div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
                

                <div class="card-body">
                  <figure class="text-center">
                    <blockquote class="blockquote">
                      <p>Happiness does not come from doing easy work but from the afterglow of satisfaction that comes after the achievement of a difficult task that demanded our best.</p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                       <cite title="Source Title">Theodore Isaac Rubin</cite>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div class="card" style="width: 18rem;">

                <div class="card-img-top tenor-gif-embed"
                data-postid="21225821" data-share-method="host"
                data-aspect-ratio="1" data-width="100%">
                <a href="https://tenor.com/view/goodgoodgeneral-mental-health-mental-health-action-day-patience-self-care-gif-21225821">Goodgoodgeneral Mental Health GIF</a>from <a href="https://tenor.com/search/goodgoodgeneral-gifs">Goodgoodgeneral GIFs</a></div>
                <script type="text/javascript" async src="https://tenor.com/embed.js"></script>


                <div class="card-body">
                  <figure class="text-center">
                    <blockquote class="blockquote">
                      <p>Life is short. Do stuff that matters..</p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                       <cite title="Source Title">Siqi Chen</cite>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div class="card" style="width: 18rem;">
                <!-- <img src="..." class="card-img-top" alt="..."> -->
                <div class="card-img-top tenor-gif-embed" data-postid="25496521" data-share-method="host" data-aspect-ratio="0.8" data-width="100%"><a href="https://tenor.com/view/luffy-crying-one-piece-one-piece-to-be-continue-one-piece-luffy-to-be-continued-gif-25496521">Luffy Crying One Piece GIF</a>from <a href="https://tenor.com/search/luffy+crying-gifs">Luffy Crying GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
                <div class="card-body">
                  <figure class="text-center">
                    <blockquote class="blockquote">
                      <p>Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort</p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                       <cite title="Source Title">Paul J. Meyer</cite>
                    </figcaption>
                  </figure>
                </div>
              </div>

              <!-- accordian starts -->
			<div class="container">
			<div class="row">
			<div class="container">
				<h4 class="text-center">Todays to-do list</h4>
			</div>	
			
              <div class="accordion accordion-flush" id="accordionFlush">
                <%-- <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed " style="text-decoration: line-through;" type="button" 
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      Accordion Item #1
                    </button>
                  </h2>
                  <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                  </div>
                </div> --%>
              </div>
              </div>
              </div>

              <!-- accordian ends -->



        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="../javascript/DashboardLogic.js"></script>      
</body>
</html>