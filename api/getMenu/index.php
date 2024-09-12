<?php
    define('MODX_API_MODE', true);
    require_once $_SERVER["DOCUMENT_ROOT"] . '/index.php';
    $modx = new modX();
    $modx->initialize('web');
    $menu = [];
    function getDataColection($parent, &$menu, &$modx)
    {
        $res = $modx->getCollection('modResource', [
            'parent' => $parent,
            'published' => 1,
            'deleted' => 0,
            'hidemenu' => 0
        ]);
        foreach ($res as $item) {
            $arr = [
                'title' => $item->get('pagetitle'),
                'url' => 'https://' . $_SERVER['HTTP_HOST'] . '/' . $modx->makeUrl($item->get('id'))
            ];
            if ($modx->getChildIds($item->get('id'), 1)) {
                getDataColection((int)$item->get('id'), $arr['children'], $modx);

            }
            $menu[] = $arr;
        }
    }
    getDataColection(0,$menu, $modx);
header('Content-Type: application/json');
echo json_encode($menu, true);