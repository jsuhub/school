export function request(data: any) {
    fetch("http://www.qidong.love:8000/topic/submit", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: data
    })
}