/**
 * Created by IntelliJ IDEA.
 * User: sam
 * Date: 10/21/11
 * Time: 1:07 PM
 * To change this template use File | Settings | File Templates.
 */

import ChecksumAccumulator.calculate

object Summer {
  def main(args: Array[String]) {
    for (arg <- args)
      println(arg + ": " + calculate(arg))
  }
}