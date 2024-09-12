<!doctype html>
<html lang="en">
<head>
    <title>{$_modx->resource.pagetitle} - {$_modx->config.site_name}</title>
    <base href="{$_modx->config.site_url}"/>
    <meta charset="{$_modx->config.modx_charset}"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
<nav>
    <div>
        <svg class="nav_open" viewBox="0 -2 28 28" xmlns="http://www.w3.org/2000/svg">
            <path d="m2.61 0h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z"/>
            <path d="m2.61 9.39h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z"/>
            <path d="m2.61 18.781h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z"/>
        </svg>
    </div>
</nav>
<div class="page">
    {block "content"}

    {/block}
</div>
<div class="nav_container">
    <div class="nav_relative">
        <div>
            <a class="contacts_us" href="#">Наши контакты</a>
        </div>
        <svg class="nav_close" fill="#FFA500" width="50px" height="50px" viewBox="0 0 24 24"
                                   xmlns="http://www.w3.org/2000/svg">
            <path d="M16.9498 8.46447C17.3404 8.07394 17.3404 7.44078 16.9498 7.05025C16.5593 6.65973 15.9261 6.65973 15.5356 7.05025L12.0001 10.5858L8.46455 7.05025C8.07402 6.65973 7.44086 6.65973 7.05033 7.05025C6.65981 7.44078 6.65981 8.07394 7.05033 8.46447L10.5859 12L7.05033 15.5355C6.65981 15.9261 6.65981 16.5592 7.05033 16.9497C7.44086 17.3403 8.07402 17.3403 8.46455 16.9497L12.0001 13.4142L15.5356 16.9497C15.9261 17.3403 16.5593 17.3403 16.9498 16.9497C17.3404 16.5592 17.3404 15.9261 16.9498 15.5355L13.4143 12L16.9498 8.46447Z"/>
        </svg>
        <div class="nav">
            <div class="nav_animate">

                <a class="nav_back" href="#">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12H20M4 12L8 8M4 12L8 16" stroke="orange" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                    Вернуться назад
                </a>
                <div class="nav_menu">
                    <h3 class="nav_title">Каталог</h3>
                    <div class="links"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="assets/js/scripts.js"></script>
</body>
</html>
