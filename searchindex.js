Search.setIndex({envversion:46,filenames:["api","contributing","exceptions","index","jobmanager","poller","protocol","receiver","router","sender","utils","utils/classes","utils/messages"],objects:{"eventmq.exceptions":{EventMQError:[2,5,1,""],InvalidMessageError:[2,5,1,""],MessageError:[2,5,1,""]},"eventmq.jobmanager":{JobManager:[4,4,1,""]},"eventmq.jobmanager.JobManager":{"__init__":[4,2,1,""],"__weakref__":[4,1,1,""],on_ack:[4,2,1,""],process_message:[4,2,1,""],send_inform:[4,2,1,""],start:[4,2,1,""]},"eventmq.poller":{Poller:[5,4,1,""]},"eventmq.poller.Poller":{"__init__":[5,2,1,""],poll:[5,2,1,""],register:[5,2,1,""],unregister:[5,2,1,""]},"eventmq.receiver":{Receiver:[7,4,1,""]},"eventmq.receiver.Receiver":{"__init__":[7,2,1,""],connect:[7,2,1,""],listen:[7,2,1,""],name:[7,1,1,""],ready:[7,1,1,""],zcontext:[7,1,1,""],zsocket:[7,1,1,""]},"eventmq.router":{Router:[8,4,1,""]},"eventmq.router.Router":{"__weakref__":[8,1,1,""],on_inform:[8,2,1,""],on_receive_reply:[8,2,1,""],on_receive_request:[8,2,1,""],send_ack:[8,2,1,""],start:[8,2,1,""]},"eventmq.sender":{Sender:[9,4,1,""]},"eventmq.sender.Sender":{"__init__":[9,2,1,""],connect:[9,2,1,""],listen:[9,2,1,""],name:[9,1,1,""],ready:[9,1,1,""],zcontext:[9,1,1,""],zsocket:[9,1,1,""]},"eventmq.utils":{classes:[11,0,0,"-"],messages:[12,0,0,"-"],random_characters:[10,3,1,""]},"eventmq.utils.classes":{ZMQReceiveMixin:[11,4,1,""],ZMQSendMixin:[11,4,1,""]},"eventmq.utils.classes.ZMQReceiveMixin":{"__weakref__":[11,1,1,""],recv:[11,2,1,""],recv_multipart:[11,2,1,""]},"eventmq.utils.classes.ZMQSendMixin":{"__weakref__":[11,1,1,""],send:[11,2,1,""],send_multipart:[11,2,1,""]},"eventmq.utils.messages":{generate_msgid:[12,3,1,""],parse_message:[12,3,1,""],parse_router_message:[12,3,1,""],send_emqp_message:[12,3,1,""],send_emqp_router_message:[12,3,1,""]},eventmq:{exceptions:[2,0,0,"-"],jobmanager:[4,0,0,"-"],poller:[5,0,0,"-"],receiver:[7,0,0,"-"],router:[8,0,0,"-"],sender:[9,0,0,"-"],utils:[10,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","attribute","Python attribute"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","class","Python class"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:attribute","2":"py:method","3":"py:function","4":"py:class","5":"py:exception"},terms:{"0mq":[6,11],"__init__":[4,5,7,9],"__weakref__":[4,8,11],"_empty_":6,"_headers_":6,"_issu":[],"_msg_":6,"_msgid_":6,"_queue_name_":6,"_recipient_id":11,"_sourc":[],"_topic_name_":6,"abstract":6,"case":6,"class":[5,9],"default":[4,6,7,9],"function":[7,8],"import":1,"int":5,"long":5,"new":8,"public":6,"return":[1,5,7,9,10,12],"true":[6,7,9],"while":6,about:[4,6],absolut:1,accept:6,account:12,ack:[6,8],act:6,actual:4,addr:[4,7,9],address:[],after:6,agre:6,all:[2,4,6,7,9],allow:6,alpha:6,and_data:12,ani:6,api:[],appear:5,applic:6,architectur:[],arg:[4,5,7,8,9,12],attr:5,automat:11,avail:[7,9],awaiting_ack:4,back:6,backend_addr:8,base:[2,5],basi:6,befor:[5,6],begin:[4,8],belong:6,below:6,between:6,bool:[7,9],both:[5,6],broker:6,build:9,built:6,bulid:7,call:[5,7,8],callabl:7,can:[6,12],chang:6,charact:10,check:[7,9],client:[],code:[1,3],com:[],come:8,comma:6,command:[6,12],complet:6,compon:6,connction:[7,9],connect:[4,6,7,8,9,12],consist:6,contain:[6,10],content:[],context:[7,9],convers:6,convienc:[5,11],count:6,creat:[7,8,9,10],csv:6,current:[7,9],data:12,deal:10,dealer:9,debug:6,def:8,defeat:6,defin:[4,6,7,8,9,11],deliv:6,describ:6,descript:6,detail:6,detect:6,determin:6,devic:[5,11,12],dialog:6,dict:5,dictionari:[5,6],differ:1,directli:[5,11],disconnect:6,distribut:6,doesn:5,either:6,els:[1,6],empti:6,emqp:[],encount:2,end:11,enderlab:[],ensur:[4,6],even:6,event:5,eventloop:[4,7,8,9],eventmqerror:2,except:[],execut:6,explicitli:11,expos:4,extra:6,fail:6,fair:6,fals:[4,6,7,9],few:1,field:6,finish:6,first:6,fit:6,flag:5,follow:6,format:[6,12],found:8,foundat:6,frame:[],free:6,from:[2,5,6,8],frontend_addr:8,gener:[4,5,6,7,9,12],generate_msgid:12,github:[],gnu:6,goal:[],good:11,guarante:6,guarente:[],hand:10,handl:[6,8],happen:5,have:12,header:[],heartbeat:[],heavi:6,here:6,hope:6,how:5,html:6,http:6,ident:[6,11],ietf:6,implement:[6,11],impli:6,includ:6,incom:[],index:3,inform:[4,6,8],inherit:2,insert:[6,11],instal:1,instanc:4,interpret:6,interv:6,invalidmessageerror:2,isn:8,issu:[1,3,6],iter:5,job:[],jobmanag:[],kei:[5,6],kwarg:[4,5,7,8,9],languag:[],later:6,least:6,leav:6,length:10,let:6,licens:[],like:[10,11],list:[4,8,11],listen:[4,7,8,9],look:11,loop:5,mai:[6,11],main:4,make:10,malform:2,manag:[],mani:6,manual:6,master:6,merchant:6,messag:[2,6,9,11],message_bodi:12,message_id:12,messageerror:2,meta:12,method:[5,7,8,11],mode:7,modifi:6,modul:[3,10],more:[6,10],msg:[4,6,8,12],msg_id:[],msgid:[4,8],multipart:[6,11],must:[6,11],name:[4,6,7,8,9],next:5,none:[7,9,11,12],note:[4,7,9],object:[4,5,8,11],on_ack:4,on_command:8,on_inform:8,on_receive_repli:8,on_receive_request:8,on_recv:7,onc:6,onli:[7,9],onlin:8,option:[4,6,7,9,12],org:6,orient:6,origin:6,other:6,otherwis:[4,7,9],own:11,page:3,param:[],paramet:[4,5,7,8,9,11,12],pars:12,parse_messag:12,parse_router_messag:12,part:[6,12],particular:[6,9],pass:[6,7,8],peer:6,pictur:6,poll:[5,7,9],poller:[],pollin:5,pollout:5,pool:6,portion:4,possibl:1,practic:11,prefix:12,prepend:6,pretti:6,problem:2,process:[4,6],process_messag:4,prop:[],properti:[7,9],protocol:[],protocol_vers:11,provid:8,pub:6,publish:6,purpos:6,queue:[6,8],rais:[2,7,9,12],random:[10,12],random_charact:10,raw:11,raw_messag:[],readi:[6,7,9],receiv:[],recent:6,reciev:7,recip:[],recipi:[8,11,12],recipient_id:12,recommend:6,recv:11,recv_multipart:11,redistribut:6,refer:[4,8,11],regist:5,regular:6,rel:1,reliabl:6,remain:5,remov:6,rep:7,repli:[6,12],req:9,request:[],requir:[6,7],requri:6,resourc:[4,6],respond:6,respons:[4,7,8,9],restart:6,retri:6,rfc2119:6,rfc:6,robin:6,round:6,rout:[6,8],router:[],run:4,search:3,see:[5,6],self:[],send:[4,6,8,9,11,12],send_ack:8,send_emqp_messag:12,send_emqp_router_messag:12,send_inform:4,send_messag:[],send_multipart:11,send_raw:[],sender:[],sender_id:12,sent:[6,11],seper:6,serv:6,server:[4,6],servic:6,set:[4,5,6,7,9],shall:6,should:[2,5,6,7,9],shown:6,simpl:[8,10],singl:6,skip:[7,9,11],skip_zmqstream:[7,9],socket:[5,6,7,8,9,11,12],softwar:6,some:[10,11,12],someon:6,someth:11,somewher:1,sourc:[1,3],spawn:4,specif:[],specifi:[6,10,11],start:[4,7,8,9],statu:6,stop:6,str:[4,7,8,9,11,12],string:[4,6,7,8,9,12],structur:2,sub:6,subclass:2,subject:6,subset:6,success:6,system:1,take:12,task:4,tcp:[4,8],term:6,them:7,thi:[2,4,5,6,7,8,9,10,11],thing:[4,10,12],through:6,time:6,timeout:5,tip:1,tool:6,topic:[],topolog:[],tornado:[4,8],trace:6,tupl:[5,11,12],type:[6,7,9],typecast:5,typeerror:7,undefin:5,under:6,uniqu:[4,6],univers:[],unless:[4,7,9],unregist:5,unus:7,upon:6,usual:8,uuid:[4,7,9],valid:6,valu:[5,6,12],version:[1,6,11],via:[7,9],wait:5,warn:8,warranti:6,weak:[4,8,11],web:6,well:6,when:[1,2,6,7,8,9,11],where:6,which:6,wish:12,without:6,word:6,work:[1,11],worker:[],worri:6,wrap:[7,9],you:[1,6,11,12],your:[6,11],zcontext:[7,9],zeromq:6,zmq:[5,6,7,9,11,12],zmqreceivemixin:11,zmqsendmixin:11,zmqstream:[7,9],zsocket:[7,9]},titles:["API Documentation","Contributing to EventMQ","<code class=\"docutils literal\"><span class=\"pre\">exceptions</span></code> &#8211; Exceptions","EventMQ Documentation","<code class=\"docutils literal\"><span class=\"pre\">jobmanager</span></code> &#8211; Job Manager","<code class=\"docutils literal\"><span class=\"pre\">poller</span></code> &#8211; Poller","EventMQ Protocol Specification","<code class=\"docutils literal\"><span class=\"pre\">receiver</span></code> &#8211; Receiver","<code class=\"docutils literal\"><span class=\"pre\">router</span></code> &#8211; Router","<code class=\"docutils literal\"><span class=\"pre\">sender</span></code> &#8211; Sender","<code class=\"docutils literal\"><span class=\"pre\">utils</span></code> &#8211; Utilities","<code class=\"docutils literal\"><span class=\"pre\">classes</span></code> &#8211; Utility Classes","<code class=\"docutils literal\"><span class=\"pre\">messages</span></code> &#8211; Message Utilities"],titleterms:{"class":11,address:6,api:0,architectur:6,client:6,contribut:1,document:[0,3],emqp:6,eventmq:[1,3,6],except:2,frame:6,global:6,goal:6,header:6,heartbeat:6,indic:3,job:4,jobmanag:4,languag:6,licens:6,manag:4,messag:12,poller:5,protocol:6,receiv:7,request:6,router:[6,8],sender:9,specif:6,tabl:3,topolog:6,util:[10,11,12],welcom:[],worker:6}})