import collection.mutable.Queue

package

/**
 * Created by IntelliJ IDEA.
 * User: sam
 * Date: 10/21/11
 * Time: 2:15 PM
 * To change this template use File | Settings | File Templates.
 */

object BeerSuck {
  import java.net.{URLConnection, URL}
  import scala.xml._
  def friendFeed():Elem = {
    val url = new URL("http://localhost/~sam/web_pages/Apex_Beer_Menu.html")
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

}