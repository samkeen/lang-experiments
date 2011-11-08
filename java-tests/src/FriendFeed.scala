object FriendFeed {
	import java.net.{URLConnection, URL}
	import scala.xml._
	import scala.collection.mutable.{Queue,HashMap}
	
	def main(args:Array[String]) = {
		val feedXml = friendFeed
		var map = new HashMap[String,Int]
		args.foreach{(serviceName) =>
			val filteredEntries = filterFeed(feedXml, serviceName)
			var users:Node = <UserList/>;
			filteredEntries.foreach{(user) =>
				users = add(users, user)
			}
			map += serviceName -> filteredEntries.length
			println(results(serviceName,filteredEntries.length,users))
		}
		println(stats(map))
	}
	
	def friendFeed():Elem = {
		val url = new URL("http://friendfeed.com/api/feed/public?format=xml&num=100")
		val conn = url.openConnection
		XML.load(conn.getInputStream)		
	}
	
    def filterFeed(feed:Elem, feedId:String):Seq[Node] = {
		var results = new Queue[Node]()
		feed\"entry" foreach{(entry) =>
			if (search(entry\"service"\"id" last, feedId)){
				results += (entry\"user"\"nickname").last
			}
		}
		return results
	}
	
	def search(p:Node, Name:String):Boolean = p match {
		case <id>{Text(Name)}</id> => true
		case _ => false
	}
	
  	def add(p:Node, newEntry:Node ):Node = p match {
		case <UserList>{ ch @ _* }</UserList> => <UserList>{ ch }{ newEntry }</UserList>
  	}

	def results(name:String, cnt:Int, elements:NodeSeq):Any = {
		if (cnt > 0){
			return <Service id={name}>{elements}</Service>
		} 
	}
	
	def stats(map:HashMap[String,Int]):Node = {
		var nodes = new Queue[Node]()
		map.foreach{(nvPair) =>
			nodes += <Service id={nvPair._1} cnt={nvPair._2.toString}/>
		}
		return <Stats>{nodes}</Stats>
	}
	
}