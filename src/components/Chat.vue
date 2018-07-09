<template>
    <div>
        <h1>Header</h1>
        <!-- <header></header> -->
        <div class="body">
            <div id="chatList">
                <div class="title">
                    <p>방목록</p>
                </div>
                <div class="content">
                    <div class="chatRoom">
                        <div class="roomPhoto"></div>
                        <div class="roomText">
                            <div>
                                <span class="roomName">방 제목 블라블라</span>
                                <span class="roomDate">YYYY-MM-DD</span>
                                </div>
                            <div class="roomDescription">
                                방설명 방설명 방설명 방설명 방설명
                            </div>
                        </div>
                    </div>
                    <div class="chatRoom">
                        <div class="roomPhoto"></div>
                        <div class="roomText">
                            <div>
                                <span class="roomName">방 제목 블라블라</span>
                                <span class="roomDate">YYYY-MM-DD</span>
                                </div>
                            <div class="roomDescription">
                                방설명 방설명 방설명 방설명 방설명
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="chatPage">
                <div class="title">
                    <p>방제목 블라블라</p>
                </div>
                <div class="content">
                    <div id="messageLog">
                        <div class="message notice">
                            <div>YYYY-MM-DD-PM HH:MM</div>
                            <div>회원1님이 입장하셨습니다.</div>
                        </div>
                        <div class="message me">
                            <span class="time">HH:MM</span>
                            <span class="text">여봐라 게 아무도 없느냐.</span>
                        </div>
                        <div class="message thridPartyWrapper">
                            <span class="userPhoto">
                            </span>
                            <span>
                                <div class="userName">
                                    회원2
                                </div>
                                <div class="thridParty">
                                    <span class="text">여봐라 게 아무도 없느냐.</span>
                                    <span class="time">HH:MM</span>
                                </div>
                            </span>
                        </div>
                        <div class="message me">
                            <span class="time">HH:MM</span>
                            <span class="text">안녕하세요~</span>
                        </div>
                    </div>
                    <div id="meessageInput"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import header from "./header"

export default {
    components:{
        // header,
        
    }
}
</script>

<style>
.body{
    display: flex;
    border-top: solid 1px #d9d9d9
}
.title{
    height: 70px;
    border-bottom: solid 1px #d9d9d9;
}
.title > p{
    font-size: 20px;
    color: #828282;
    line-height: 71px;
}
.content{
    height: 894px;
}
#chatList{
    flex: 1 1 432px;
    border-right: solid 1px #d9d9d9;
}
.chatRoom{
    display: flex;
    background-color: #f2f2f2;
    padding: 0px 24px;
    border-bottom: solid 1px #d9d9d9;
}
.roomPhoto{
    flex: 0 1 152px;
}
.roomText{
    flex: 0 1 280px;
    padding: 30px 0px;
    text-align: left;
}
.roomName{
    font-size: 16px;
    color: #515151;
}
.roomDate{
    font-size: 14px;
    float: right;
    color: #a8a8a8;
}
.roomDescription{
    font-size: 14px;
    color: #a8a8a8;
}
#chatPage{
    flex: 1 1 1008px;
}
#chatPage > .title{
    text-align: left;
}
#chatPage > .title > p{
    margin-left:32px;
}
#messageLog{
    padding: 24px;
}
.message{
    margin: 20px 0px;
    width: 100%;
}
.thridPartyWrapper{
    text-align: left;
}
.thridPartyWrapper > span{
    display: inline-block;
}
.thridPartyWrapper .userPhoto{
    vertical-align: top;
    margin-right: 12px;
    width: 40px;
    height: 40px;
    background-color: #515151;
}
.thridPartyWrapper .userName{
    margin-bottom: 6px;
}
.thridParty > .text{
    display: inline-block;
    font-size: 14px;
    color: #2b2b2b;
    border-radius: 20px;
    background-color: #e8e8e8;;
    padding: 10px 16px;
}
.thridParty > .time{
    display: inline-block;
    font-size: 12px;
    color: #a8a8a8;
    vertical-align: bottom;
    margin-left: 8px;
}
.notice{
    color: #a8a8a8; 
}
.me{
    text-align: right;
}
.me > .time{
    display: inline-block;
    font-size: 12px;
    color: #a8a8a8;
    vertical-align: bottom;
     margin-right: 8px;
}
.me > .text{
    display: inline-block;
    font-size: 14px;
    color: #ffffff;
    border-radius: 20px;
    background-color: #8d8d8d;
    padding: 10px 16px;
}
#messageInput{
    
}

</style>
