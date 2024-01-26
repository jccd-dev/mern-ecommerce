import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { userRequest } from "../utils/requestMethod";
import { useSelector } from "react-redux";
/**
 *@description use to send stripe session to validate if payment is complete
 *
 */

const Return = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    const getSessionStatus = async () => {
      try {
        const res = await userRequest.get(
          `checkout/session-status?session_id=${sessionId}`,
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };

    getSessionStatus();
  }, [sessionId]);
  return (
    <Link to={"/cart"}>
      <button>test</button>
    </Link>
  );
};

export default Return;
