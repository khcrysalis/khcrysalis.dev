---
title: 'Exploring CoreAnimation Bundles and Archives'
pubDate: '2026-04-09'
tags: ["iOS"]
---

I've came across some interest in CoreAnimation, seeing all the beautiful animations that bundled and used within iOS/macOS made me extremely curious in how they were made and played.

First and formost I needed to extract the OBJC headers from the DSC (Dyld Shared Cache) so we're able to understand how it works, I'm not going to show you how to do it here, but if you want to learn how I extract headers you can visit the [Diving into Apples PackageKit private framework](./diving-into-packagekit) blog.

## The beginning

All the headers for CoreAnimation are relatively simple, but first we would need to load these files so we're able to read their contents or interact with them via other API's

```objc
@interface CAPackage : NSObject
+ (id)packageWithData:(NSData *)data type:(NSString *)type options:(id)opts error:(NSError **)outError;
+ (id)packageWithContentsOfURL:(NSURL *)url type:(NSString *)type options:(id)opts error:(NSError **)outError;
- (NSArray <NSString *> *)publishedObjectNames;
@property(readonly, getter=isGeometryFlipped) BOOL geometryFlipped;
@property(readonly) CALayer *rootLayer;
@end
```

There's two ways to init `CAPackage`.

```objc
+ (id)packageWithData:(NSData *)data type:(NSString *)type options:(id)opts error:(NSError **)outError;
+ (id)packageWithContentsOfURL:(NSURL *)url type:(NSString *)type options:(id)opts error:(NSError **)outError;
```

You can either import `NSData` or an `NSURL` depending on what you want to use, however CAML bundles will need to be imported with an `NSURL`.

You will also need to specify the type of file you will be importing, the only values I know of that could be passed into type is `kCAPackageTypeArchive` and `kCAPackageTypeCAMLBundle`.

Once you import the file properly using this API, you will get the corresponding `CALayer` for these packages, and then you're able to use any CoreAnimation API you wish with these files.

## Toggling States

Apple has another API they use internally that's not public, it's used for toggling different states of a give `CALayer` if they have any.

```objc
@interface CAStateController : NSObject;
@property (readonly) CALayer* layer;
-(void)setState:(id)arg1 ofLayer:(id)arg2 transitionSpeed:(float)arg3;
-(void)setState:(id)arg1 ofLayer:(id)arg2;
-(id)stateOfLayer:(id)arg1;
-(id)initWithLayer:(id)arg1;
-(void)setInitialStatesOfLayer:(id)arg1 transitionSpeed:(float)arg2;
-(void)_applyTransition:(id)arg1 layer:(id)arg2 undo:(id)arg3 speed:(float)arg4;
@end
```

We need to be able to toggle between these states, so here's where `CAStateController` comes in, just initialize it with a given `CALayer`.

However, before doing that we need to make sure we know what all the given available states are, we can use this snippet to list states within a `CALayer`:

```swift
if let states = layer.value(forKey: "states") as? [Any] {
	print(states)
}
```

Once we have the states that we know exist, we can start toggling between states!

```swift
if
	let index = selectedStateIndex,
	index >= 0,
	index < availableStates.count
{
	controller.setState(availableStates[index], ofLayer: layer, transitionSpeed: effectiveTransitionSpeed)
} else if selectedStateIndex == nil {
	controller.setState(nil, ofLayer: layer, transitionSpeed: effectiveTransitionSpeed)
}
```

By default, the current state should be set to `nil`, but when you want to switch to another state, like before we needed to save all the states beforehand so we know that they exist. So, just put in a specific state you want to switch to using:

```objc
-(void)setState:(id)arg1 ofLayer:(id)arg2 transitionSpeed:(float)arg3;
-(void)setState:(id)arg1 ofLayer:(id)arg2;
```

Now we're able to switch between states!

## Shasta Development

I looked into how these worked extensively, and even make an app for it! You can come check it out, it was pretty fun to work on and I had a blast even making custom CA bundles/archives that are compatible with viewing with this app.

![Shasta](https://github.com/CLARATION/Shasta/raw/main/demo.webp)

- You can find Shasta here: https://github.com/claration/Shasta

This was a rather short post, probably one that I put a lot less effort into, but thats okay!
