package com.qa.TicketBackend.utils;

import java.beans.PropertyDescriptor;
import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.BeanWrapper;
import org.springframework.beans.BeanWrapperImpl;

public class MyBeanUtils {

	private MyBeanUtils() {

	}

	public static void mergeNotNull(Object source, Object target) { // takes in source obj and obj to merge(target)
		BeanUtils.copyProperties(source, target, getNullPropertyNames(source)); // copies properties from source to
																				// target //function called to
	} // function called to return source's null properties

	private static String[] getNullPropertyNames(Object source) { // Returns array of string, null properties
		final BeanWrapper src = new BeanWrapperImpl(source); // source obj is wrapped by beanwrapper allowing for
																// manipulation

		Set<String> names = new HashSet<>(); // set of property names, ensures uniqueness
		for (PropertyDescriptor pd : src.getPropertyDescriptors()) {// enhanced loop iterating through
			// System.out.print(pd.getName() + " = "); //
			// obj.getPropertyDescriptors()
			// System.out.println(src.getPropertyValue(pd.getName())); // p
			if (((src.getPropertyValue(pd.getName()) == null) || (src.getPropertyValue(pd.getName()).equals(0))))
				// getting value of thedescriptor.getName(which returns
				// programmatic name) and if == null, adding name to list
				names.add(pd.getName());
		}
		System.out.println(names);
		return names.toArray(new String[names.size()]); // returns array of names to ignore to mergeNotNull
	}
}