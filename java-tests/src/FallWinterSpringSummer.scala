/**
 * Created by IntelliJ IDEA.
 * User: sam
 * Date: 10/21/11
 * Time: 1:37 PM
 * To change this template use File | Settings | File Templates.
 */
import ChecksumAccumulator.calculate

object FallWinterSpringSummer extends Application {
  for (season <- List("fall", "winter", "spring"))
    println(season +" :"+ calculate (season))
}