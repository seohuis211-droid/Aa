<script src="https://cdn.jsdelivr.net/gh/seohuis211-droid/Aa@main/data.js?v=12.1"></script>

<script>
window.addEventListener('load', function() {
    setTimeout(function() {
        var path = window.location.pathname;

        if (typeof myPageDatabase !== 'undefined' && myPageDatabase[path]) {
            var item = myPageDatabase[path];
            
            var container = document.createElement('div');
            container.style.cssText = "padding:60px 20px; text-align:left; background:#ffffff; border-bottom:4px solid #000; max-width:900px; margin:0 auto; position:relative; z-index:9999;";
            
            // --- 내용 추출 로직 개선 ---
            var mainContent = "";
            if (typeof item === 'string') {
                // 1. 데이터가 그냥 글자일 때
                mainContent = item;
            } else if (typeof item === 'object' && item.content) {
                // 2. 데이터가 {content: "..."} 형식일 때
                mainContent = item.content;
            } else {
                // 3. 그 외의 경우 (주소 끝 단어라도 출력)
                mainContent = "<h2>" + path.split('/').pop().replace(/-/g, ' ') + " 상세 안내</h2><p>해당 페이지의 상세 정보를 준비 중입니다.</p>";
            }
            
            var html = '<div style="font-size:18px; line-height:1.8; color:#333; margin-bottom:40px;">' + mainContent + '</div>';
            
            // 하단 링크 리스트
            html += '<div style="background:#f8f9fa; padding:25px; border-radius:15px; border:1px solid #eee;">';
            html += '<p style="font-size:14px; color:#888; margin-bottom:15px; font-weight:bold;">📍 다른 지역 정보 보기</p><div style="display:flex; flex-wrap:wrap; gap:10px;">';
            Object.keys(myPageDatabase).forEach(function(key) {
                if (key !== path) {
                    var label = (typeof myPageDatabase[key] === 'object') ? key.split('/').pop() : myPageDatabase[key];
                    html += '<a href="' + key + '" style="padding:8px 15px; background:#fff; border:1px solid #ddd; border-radius:5px; text-decoration:none; color:#555; font-size:13px;">#' + label + '</a>';
                }
            });
            html += '</div></div>';
            
            container.innerHTML = html;
            document.body.prepend(container);
        }
    }, 500);
});
</script>
