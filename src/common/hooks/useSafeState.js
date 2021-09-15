import { useEffect, useRef, useState } from "react"
import { NOOP } from "@/common/utils/constants";

export default (defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  const isHavenUnmount = useRef(false);

  useEffect(() => ()=> isHavenUnmount.current = true)

  const safeSetValue = isHavenUnmount.current ? NOOP : setValue

  return [value, safeSetValue]
}