var txt2_items = [
    { video: "text_example0.mp4", prompt: "Modern chair, thick seat cushion, off-white textured fabric and short tapered warm brown polished wooden legs.", model: "text_example0.glb", exposure: 5},
    { video: "text_example1.mp4", prompt: "Reddish-brown rectangular wooden cabinet on short legs with two drawers, an open shelf and a built-in power socket.", model: "text_example1.glb", exposure: 5},
    { video: "text_example2.mp4", prompt: "Black metal-framed bed with a curved headboard, white rectangular mattress and two white rectangular pillows.", model: "text_example2.glb", exposure: 5},
    { video: "text_example3.mp4", prompt: "Light rectangular coffee table with three-plank top, black metal accents, central drawer with ring handle and thick black tapered legs.", model: "text_example3.glb", exposure: 5},
    { video: "text_example4.mp4", prompt: "Blue reclining armchair with padded seat, thick armrests, rectangular headrest, and dark brown lever on the lower right.", model: "text_example4.glb", exposure: 5},
    { video: "text_example5.mp4", prompt: "Modern, minimalist chair with a light beige upholstered rectangular seat and tall curved backrest, supported by four tapering wooden legs.", model: "text_example5.glb", exposure: 5},
    { video: "text_example6.mp4", prompt: "Light grey bed with a rectangular headboard accented by silver studs, a low-profile upholstered frame, a white mattress, and brown legs.", model: "text_example6.glb", exposure: 5},
    { video: "text_example7.mp4", prompt: "A black-framed bed with a wavy headboard and footboard, smooth black rails and legs, and a white mattress with two white pillows.", model: "text_example7.glb", exposure: 5},
];

var img2_items = [
    { video: "img_example0.mp4", prompt: "img_example0.png", model: "img_example0.glb"},
    { video: "img_example1.mp4", prompt: "img_example1.png", model: "img_example1.glb"},
    { video: "img_example5.mp4", prompt: "img_example5.png", model: "img_example5.glb"},
    { video: "img_example6.mp4", prompt: "img_example6.png", model: "img_example6.glb"},
    { video: "img_example4.mp4", prompt: "img_example4.png", model: "img_example4.glb"},
    { video: "img_example2.mp4", prompt: "img_example2.png", model: "img_example2.glb"},
    { video: "img_example3.mp4", prompt: "img_example3.png", model: "img_example3.glb"},
    { video: "img_example7.mp4", prompt: "img_example7.png", model: "img_example7.glb"},
];


function txt2_carousel_item_template(item) {
    return `<div class="x-card clickable" style="min-width: 120px" onclick=\'openWindow(txt2_window_template(${JSON.stringify(item)}))\'>
                <div class="x-labels">
                    <div class="x-label">GLB ✓</div>
                </div>
                <div style="width: 100%; aspect-ratio: 1">
                    <video autoplay playsinline loop muted height="100%" src="assets/txt2/videos/${item.video}"></video>
                </div>
                <div class="caption">
                    <div class="x-handwriting">
                        ${item.prompt}
                    </div>
                </div>
            </div>`;
}

function img2_carousel_item_template(item) {
    return `<div class="x-card clickable" style="min-width: 120px" onclick=\'openWindow(img2_window_template(${JSON.stringify(item)}))\'>
                <div class="x-labels">
                    <div class="x-label">GLB ✓</div>
                </div>
                <div style="width: 100%; aspect-ratio: 1">
                    <video autoplay playsinline loop muted height="100%" src="assets/img2/videos/${item.video}"></video>
                </div>
                <div class="caption">
                    <div class="x-image-prompt">
                        <img src="assets/img2/images/${item.prompt}" alt="${item.alt}">
                    </div>
                </div>
            </div>`;
}


function txt2_window_template(item) {
    let prompt = `<div class="x-handwriting">${item.prompt}</div>`;
    let panel = asset_panel_template(prompt);
    item = JSON.parse(JSON.stringify(item));
    item.model = 'assets/txt2/glbs/' + item.model
    return modelviewer_window_template(item, panel);
}


function img2_window_template(item) {
    let prompt = `<div class="x-image-prompt"><img src="assets/img2/images/${item.prompt}" alt="${item.alt}"></div>`;
    let panel = asset_panel_template(prompt);
    item = JSON.parse(JSON.stringify(item));
    item.model = 'assets/img2/glbs/' + item.model
    return modelviewer_window_template(item, panel);
}