<a class="news-item" href="{$_modx->makeUrl($id)}">
    <img class="news-item-preview" src="{$_pls['tv.preview_image']}">
    <div class="news-item-title">{$pagetitle}</div>
    <div class="news-item-text">{$content | limit : 200}{if $content | strlen > 200} ...{/if}</div>
    <div class="news-item-pubdate">{$publishedonм | date : "d.m.Y H:m:s"}</div>
</a>
