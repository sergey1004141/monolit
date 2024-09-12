{extends 'file:templates/base/base.tpl'}

{block "content"}
    <h1>{$_modx->resource.pagetitle}</h1>
    <div class="news">
        {'!pdoResources' | snippet : [
            'parrent' => $_modx->resource.id,
            'select' => '{"modResource":"id,pagetitle,content,publishedon"}',
            'where' => '{"published":"1"}',
            'tpl' => 'news_new_elem',
            'includeTVs' => 'preview_image'
        ]}
    </div>
{/block}


